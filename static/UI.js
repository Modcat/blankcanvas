(function () {
  // Don't copy this below
  window.app = {}
  app.UI = {}
  app.PTCanvas = {}
  app.PTCanvas.active = document.getElementById('canvas0')

  // Namespace
  var NS = app.UI

  // Zoom API
  app.PTZoom = {}
  app.PTZoom.get = function () { return parseInt(app.PTCanvas.active.style.getPropertyValue('--zoom')) }
  app.PTZoom.set = function (val) { app.PTCanvas.active.style.setProperty('--zoom', val) }

  // The events for the functionality of the UI
  NS.evtmap = {
    'touchSupport': false,
    'click': 'click',
    'dblclick': 'dblclick',
    'mousedown': 'mousedown',
    'mouseup': 'mouseup',
    'mousemove': 'mousemove',
    'drag': 'drag',
    'dragend': 'dragend',
    'dragenter': 'dragenter',
    'dragexit': 'dragexit',
    'dragleave': 'dragleave',
    'dragover': 'dragover',
    'dragstart': 'dragstart',
    'drop': 'drop'
  }

  if (document.documentElement.ontouchstart) {
    NS.evtmap.touchSupport = true
    NS.evtmap.click = 'touchstart'
    NS.evtmap.dblclick = 'tap',
    NS.evtmap.mousedown = 'touchstart'
    NS.evtmap.mouseup = 'touchend'
    NS.evtmap.mousemove = 'touchmove'
    NS.evtmap.drag = 'touchmove'
    NS.evtmap.dragend = 'touchmove'
    NS.evtmap.dragenter = 'touchmove'
    NS.evtmap.dragexit = 'touchmove'
    NS.evtmap.dragleave = 'touchmove'
    NS.evtmap.dragover = 'touchmove'
    NS.evtmap.dragstart = 'touchmove'
    NS.evtmap.drop = 'touchmove'
  }

  /// //////////////////////////////////////////////////
  /// //////////////// Template Engine ////////////////
  /// ////////////////////////////////////////////////

  var templateElements = document.getElementsByTagName('template')

  NS.templates = {

    'field': `<div class="field_ui {{ class }}" style="{{ style }}" data-ui-set="{{ uiSet }}">
							<i class="fa {{ icon }}"></i>
							<input type="text" value="{{ value }}">
							{{ elements }}
						</div>`,

    'range': `<input type="range" data-ui-set="{{ uiSet }}" min="{{ min }}" max="{{ max }}" value="{{ value }}" style="{{ style }}">`,

    'rangeGroup': `<form class="groupVals {{ class }}" data-ui-set="{{ uiSet }}" style="{{ style }}">
								<input type="range" min="{{ min }}" max="{{ max }}" value="{{ value }}">
								<div class="field_ui {{ innerclass }}" style="{{ innerstyle }}">
									<input type="text" autocomplete="off" value="{{ value }}">
								</div>
							</form>`,

    'radial': `<div class="radial" data-ui-set="{{ uiSet }}" style="transform:rotate({{ value }}deg);" data-value="{{value}}"></div>`,

    'radialGroup': `<form class="groupValsRadial {{ class }}" data-ui-set="{{ uiSet }}" style="{{ style }}">
							<div class="radial" style="transform:rotate({{ value }}deg);" data-value="{{value}}" ></div>
								<div class="field_ui {{ innerclass }}" style="{{ innerstyle }}">
									<input type="text" autocomplete="off" value="{{ value }}">
								</div>
							</form>`
  }

  var duplicateFields = document.querySelectorAll('template[data-duplicate-fields]'),
    duplicateAreas = document.querySelectorAll('template[data-duplicate-area]'),
    duplicateStore = {}

  // Duplicate specific fields
  for (var i = 0; i < duplicateFields.length; i++) {
    var fields = duplicateFields[i].dataset.duplicateFields.split(' '),
      seperator = duplicateFields[i].dataset.seperator || null,
      textHTML = ''

    for (var f = 0; f < fields.length; f++) {
      // If key exists then skip as content is already there
      if (!duplicateStore[ fields[f] ]) {
        duplicateStore[ fields[f] ] = ''

        var duplicate = document.querySelectorAll('template[data-ui-set="' + fields[f] + '"]')

        for (var copy = duplicate.length - 1; copy >= 0; copy--) {
          duplicateStore[ fields[f] ] += duplicate[copy].outerHTML
        }

        seperator ? duplicateStore[ fields[f] ] += seperator : null
      }

      textHTML += duplicateStore[ fields[f] ]
    }

    duplicateFields[i].outerHTML = textHTML
  }

  // Replace whole areas
  for (var i = 0; i < duplicateAreas.length; i++) {
    duplicateAreas[i].outerHTML = document.querySelectorAll(duplicateAreas[i].dataset.duplicateArea)[0].innerHTML
  }

  NS.generateTemplates = function (templateElements) {
    for (var i = templateElements.length - 1; i >= 0; i--) {
      var data = templateElements[i].dataset,
        appendElements = templateElements[i].innerHTML,
        output = new String(NS.templates[ data.tpl ])

      delete data.template

      // Loop throught meta data and assign values
      for (var key in data) {
        var reg = new RegExp('\\{\\{\\s*' + key + '\\s*\\}\\}', 'g')

        output = output.replace(reg, data[key])
      }

      // Replace {{ elements }} with the innerHTML of the template tag
      output = output.replace(/\{\{\s*elements\s*\}\}/, appendElements)

      // Final cleanup any non populated {{ }}
      output = output.replace(/\{\{(.*?)\}\}/g, '')

      // replace <template> tag with actual template code
      templateElements[i].outerHTML = output

      output = null
    }
  }

  NS.generateTemplates(templateElements)

  /// //////////////////////////////////////////////////
  /// //////////// Template Organise & Sync ///////////
  /// ////////////////////////////////////////////////

  // Pointer is an array of DOM elements that reference the current set of targeted elements
  NS.Pointer = []

  // Targeted fields located in memory & populate
  NS.__EventTargets__ = {}

  // EventMap holds callback function for that setter
  NS.__EventMap__ = {}

  // Doc contains all setter fields
  // Push all setter fields into getterFields array
  // The reason for the setterField is that DOC will change on each window instance and then the content will be pushed into getterFields
  var doc = document.querySelectorAll('*[data-ui-set]'),
    getterFields = []

  for (var i = doc.length - 1; i >= 0; i--) {
    getterFields.push(doc[i])
  }

  /* UNCOMMENT FOR PT!!! for ( var key in app.PTWindows ) {

			doc = app.PTWindows[key].document.querySelectorAll('[data-ui-set]');

			for (var i = doc.length - 1; i >= 0; i--) {
				getterFields.push( doc[i] );
			}
		} */

  // Sort getter fields in __EventTargets__ keys into groups making targeting of sets of elements fast
  for (var i = getterFields.length - 1; i >= 0; i--) {
    var fieldData = getterFields[i].dataset

    // Get to see if data-ui-set has a key if it DOESN'T! Then create a new key with the setter
    if (!NS.__EventTargets__[ fieldData.uiSet ]) {
      NS.__EventTargets__[ fieldData.uiSet ] = []
    }

    NS.__EventTargets__[ fieldData.uiSet ].push(getterFields[i])
  }

  // Template sync and EVENT UI controller

  var stopRerun = false

  NS.__UIEventRunner__ = function (el, value, setter) {
    var setTemplates = NS.__EventTargets__[ setter ],
      push = Array.prototype.push,
      update = []

    // Template Sync
    for (var int = setTemplates.length - 1; int >= 0; int--) {
      if (el.matches('button[data-ui-set]')) {
        setTemplates[int].matches('button[data-ui-set="' + value + '"]') ? update.push(setTemplates[int]) : null

        continue
      }

      if (el.matches('button')) {
        var button = setTemplates[int].querySelectorAll(':scope button[data-value="' + value + '"]')

        button.length > 0 ? push.apply(update, button) : null

        setTemplates[int].matches('button[data-value="' + value + '"]') ? update.push(setTemplates[int]) : null

        continue
      }

      if (el.matches('select')) {
        var innerSelect = setTemplates[int].querySelectorAll(':scope select')

        innerSelect.length > 0 ? push.apply(update, innerSelect) : null

        setTemplates[int].matches('select') ? update.push(setTemplates[int]) : null
      } else {
        var put = setTemplates[int].querySelectorAll(':scope input, :scope range, :scope .radial')

        put.length > 0 ? push.apply(update, put) : null

        setTemplates[int].matches('input, range, .radial') ? update.push(setTemplates[int]) : null
      }
    }

    // Itterate arrays in update
    for (var i = update.length - 1; i >= 0; i--) {
      stopRerun = true

      var element = update[i]

      // Check nodetype is input
      if (element.matches('input, select')) {
        if (element.value != value) { element.value = value }
      }

      // Check nodetype is a Radial button
      if (element.matches('.radial')) {
        element.style.transform = 'rotate(' + value + 'deg)'
        element.dataset.value = value
      }

      // Check nodetype is toggle button
      if (element.matches('button.toggle')) {
        element.setAttribute('class', el.getAttribute('class'))
      }

      // Check nodetype is button group
      if (element.matches('.buttonGroup button')) {
        element.click()
      }
    }

    stopRerun = false

    // Event Controller
    if (NS.__EventMap__[ setter ]) {
      NS.__EventMap__[ setter ](el, value)
    }
  }

  /// //////////////////////////////////////////////////
  /// /////////////// UI Interaction //////////////////
  /// ////////////////////////////////////////////////

  // Invoked on UI interaction and ensures a sutable setter value for an event
  NS.EventCheck = function (evt) {
    // Check parent stack has data-ui-set attribute to fire event NS.__UIEventRunner__
    if (stopRerun === false && evt.target.matches('select, *[value], *[data-value], button[data-ui-set]')) {
      var value = evt.target.dataset.value || evt.target.value || evt.target.dataset.uiSet

      if (evt.target.matches('*[data-ui-set]')) {
        NS.__UIEventRunner__(evt.target, value, evt.target.dataset.uiSet)
      }

      if (evt.target.matches('*[data-ui-set] *')) {
        for (var i = 0; i < evt.path.length; i++) {
          if (evt.path[i].matches('*[data-ui-set]')) {
            NS.__UIEventRunner__(evt.target, value, evt.path[i].dataset.uiSet)

            break
          }
        }
      }
    } else { stopRerun = false }
  }

  document.addEventListener('focusin', function (evt) {
		  if (evt.target.parentNode.className.match('field_ui')) {
		  	evt.target.parentNode.classList.add('focused')
		  }
  })

  document.addEventListener('focusout', function (evt) {
		  if (evt.target.matches('.field_ui > *')) {
		  	evt.target.parentNode.classList.remove('focused')
		  }

		  if (evt.target.value && evt.target.value.length == 0 && evt.target.matches('.groupVals input, .groupValsRadial input')) {
		  	evt.target.value = 0
		  }
  })

  function checkRange (min, max, val) {
    // Make sure the value is a valid integer...

    val.toString().replace(/[^0-9]+/i, '')

    parseInt(val)

    if (isNaN(val) === true) { val = 0 }

    // Now run min and max check

    if (val < min || val > max) {
      val = (val < min) ? min : val
      val = (val > max) ? max : val
    }

    return val
  }

  document.addEventListener('input', function (evt) {
    if (evt.target.matches('.groupVals input[type="range"]')) {
      var range = evt.target.form[0],
        input = evt.target.form[1]

      input.value = range.value
    }

    if (evt.target.matches('.groupVals input[type="text"]')) {
      var range = evt.target.form[0],
        input = evt.target.form[1],
        val = parseInt(input.value)

      if (input.value.length == 0) {
        range.value = 0
      } else if (range.getAttribute('min') || range.getAttribute('max')) {
        var min = parseInt(range.getAttribute('min')),
          max = parseInt(range.getAttribute('max')),
          checkedVal = checkRange(min, max, val)

        if (checkedVal != input.value) { input.value = checkedVal }

        range.value = checkedVal
      }
    }

    if (evt.target.matches('.groupValsRadial input[type="text"]')) {
      var radial = evt.target.form.children[0],
        input = evt.target,
        val = parseInt(input.value)

      if (input.value.length == 0) {
        radial.dataset.value = 0
        radial.style.transform = 'rotate(' + 0 + 'deg)'
      } else {
        var min = 0,
          max = 360,
          checkedVal = checkRange(min, max, val)

        if (checkedVal != input.value) { input.value = checkedVal }

        radial.dataset.value = checkedVal

        radial.style.transform = 'rotate(' + checkedVal + 'deg)'
      }
    }

    if (evt.target.matches('*[data-validation="number"]')) {
      var value = evt.target.value

      if (value.match(/[^0-9]+/i)) { evt.target.value = value.replace(/[^0-9]+/i, '') }
    }

    if (evt.target.matches('*[data-validation="nospecials"]')) {
      var value = evt.target.value

      if (value.match(/[^\s0-9a-z]+/i)) { evt.target.value = value.replace(/[^\s0-9a-z]+/i, '') }
    }

    NS.EventCheck(evt)
  })

  document.addEventListener(NS.evtmap.click, function (evt) {
    var target = evt.target,
      parent = evt.target.parentNode || null,
      panel = false

    // Toggle buttons
    if (target.matches('button.toggle')) {
      if (evt.target.classList.contains('on')) {
        evt.target.classList.remove('on')
      } else {
        evt.target.classList.add('on')
      }
    }

    // Panels tabbed
    if (target.matches('button[data-link]')) {
      panel = true

      // namespace & find all tabs and panels within the namespace

      var find = target.dataset.link.split('-')[0],
        oldActive = document.querySelectorAll('*[data-link|=' + find + '].active, *[data-opener|=' + find + '].active'),
        showActive = document.querySelectorAll('*[data-opener=' + evt.target.dataset.link + '], *[data-link=' + evt.target.dataset.link + ']')

      for (var i = oldActive.length - 1; i >= 0; i--) {
        oldActive[i].classList.remove('active')
      }

      // Show current tab & panel

      for (var i = showActive.length - 1; i >= 0; i--) {
        showActive[i].classList.add('active')
      }
    }

    // Tabs
    if (target.matches('.buttonGroup > button') && panel === false) {
      if (parent.classList.contains('single')) {
        parent.querySelectorAll(':scope *.active')[0].classList.remove('active')
      }

      // Set current active class
      target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active')
    }

    // click trigger

    NS.EventCheck(evt)
  })

  var radial, radialInput, radialCenter = [], radialEvent

  document.addEventListener(NS.evtmap.mousedown, radialDown, false)

  function radialDown (evt) {
    if (evt.target.matches('.radial')) {
      radial = evt.target

      radialCenter[0] = radial.offsetLeft + radial.clientWidth / 2
      radialCenter[1] = radial.offsetTop + radial.clientHeight / 2

      if (radial.parentNode.classList.contains('groupValsRadial')) {
								   // target the parent and then the input
        radialInput = radial.parentNode.querySelectorAll(':scope input')[0]
      } else {
        radialInput = null
      }

      document.body.classList.add('radialEvent')

      radialEvent = evt

      window.addEventListener(NS.evtmap.mousemove, radialRotate, true)
    }
  }

  function radialRotate (e) {
    var angle = Math.floor(Math.atan2(e.pageX - radialCenter[0], -(e.pageY - radialCenter[1])) * (180 / Math.PI))

    if (angle < 0) { angle = 180 + (180 - Math.abs(angle)) }

    radial.style.transform = 'rotate(' + angle + 'deg)'

    radial.dataset.value = angle

    if (radialInput) { radialInput.value = angle }

    // Check for event

    NS.EventCheck(radialEvent)
  }

  window.addEventListener(NS.evtmap.mouseup, function () {
    window.removeEventListener(NS.evtmap.mousemove, radialRotate, true)

    document.body.classList.remove('radialEvent')

    radial = null, radialInput = null, radialCenter = [], radialEvent = null
  }, false)

  /// //////////////////////////////////////////////////
  /// /////////////// Targeting API ///////////////////
  /// ////////////////////////////////////////////////

  // Test variables

  // Template model commented below...
  /* Drag pointer [
			{ 'element': DOMElement{} , 'x_elem': 0, 'y_elem': 0, !!'svgBox': DOMElement{}, 'nodes' : element.AppData.nodes -- returns an array[] of nodes },
			{ 'element': DOMElement{} , 'x_elem': 0, 'y_elem': 0, !!'svgBox': DOMElement{}, 'nodes' : element.AppData.nodes -- returns an array[] of nodes },
		]
		*/

  // Array of targeted DOM elements
  NS.dragPointer = []

  // Expose as app API NEED UPDATING ON DOC Change

  NS.targetSVG = document.querySelectorAll('div.target')[0]
  NS.elements = document.querySelectorAll('.elements')[0]

  NS.renderSelect = function (forceRender, pointer) {
    if (NS.dragPointer.length > 0) {
      // If no forceRender then render the bounding box or boxes
      if (!forceRender) {
        // Render boundery boxes
        for (var i = NS.dragPointer.length - 1; i >= 0; i--) {
          // If target already has bounding box then continue
          if (NS.dragPointer[i].svgBox !== false) { continue }

          var el = NS.dragPointer[i].element
								 NS.dragPointer[i].svgBox = i

          // However if not get x, y, width and height to create the SVG boundry box
          var x = el.offsetLeft || parseInt(el.style.left),
            y = el.offsetTop || parseInt(el.style.top),
            w = el.clientWidth,
            h = el.clientHeight
          rotate = el.style.transform.match(/\(([^\)]+)\)/g) ? el.style.transform.match(/\(([^\)]+)\)/g)[0] : '(0deg)',
          rotateInverse = rotate.replace('(', '(-')

          if (el.matches('p')) { w += 10; h += 10; x -= 5; y -= 5 }

          if (el.matches('svg')) {
            var vector = el.querySelectorAll(':scope > *')[0]

            if (vector.style.strokeWidth) {
              var strokeWidth = parseInt(vector.style.strokeWidth)

              w += strokeWidth
              h += strokeWidth
              x -= strokeWidth / 2
              y -= strokeWidth / 2
            }
          }

          x = x / 100
          y = y / 100
          w = w / 100
          h = h / 100

          // Antialised lines if rotated ( NOT on group elements they are always crispEdges );
          var Antialised = rotate !== '(0deg)' ? 'geometricPrecision' : 'crispEdges'

          var BBox = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

          BBox.style.cssText = ` transform:rotate${rotate}; margin: ${y * app.PTZoom.get()}px 0 0 ${x * app.PTZoom.get()}px; `
          BBox.setAttribute('width', w * app.PTZoom.get())
          BBox.setAttribute('height', h * app.PTZoom.get())

          BBox.setAttribute('data-drag-pointer', i)

          el.matches('p') ? BBox.setAttribute('data-type', 'p') : null
          el.matches('svg') ? BBox.setAttribute('data-type', 'vector') : null

          BBox.innerHTML = `<rect width="100%" height="100%" style="shape-rendering:${Antialised};" data-drag="drag"></rect>

							<g class="innerControls">

								<rect x="0" y="0"       style="transform: rotate${rotateInverse} ;" ></rect>

								<rect x="50%" y="0"     style="transform: rotate${rotateInverse} ;" ></rect>

								<rect x="100%" y="0"    style="transform: rotate${rotateInverse} ;" ></rect>

								<rect x="0" y="50%"     style="transform: rotate${rotateInverse} ;" ></rect>

								<rect x="100%" y="50%"  style="transform: rotate${rotateInverse} ;" ></rect>

								<rect x="0" y="100%"    style="transform: rotate${rotateInverse} ;" ></rect>

								<rect x="50%" y="100%"  style="transform: rotate${rotateInverse} ;" ></rect>

								<rect x="100%" y="100%" style="transform: rotate${rotateInverse} ;" ></rect>

							</g>`

          NS.targetSVG.appendChild(BBox)
          NS.dragPointer[i].svgBox = BBox
          NS.dragPointer[i].svgBox.coords = { x: x, y: y, w: w, h: h }
        }
      }

      // If any type of force
      if (forceRender === 'text') {
        if (!NS.dragPointer[pointer].targeted) {
          NS.targetSVG.style.pointerEvents = 'none'

          NS.dragPointer[pointer].svgBox.querySelectorAll(':scope g')[0].style.opacity = 0

          NS.dragPointer[pointer].targeted = true

          NS.dragPointer[pointer].element.setAttribute('contenteditable', 'true')

          for (var i = NS.dragPointer.length - 1; i >= 0; i--) {
            if (NS.dragPointer[i].targeted === true) { continue }

            NS.dragPointer[i].svgBox.remove()

            NS.dragPointer.splice(i, 1)
          }

          NS.dragPointer[pointer].element.focus()
        } else {
          NS.targetSVG.style.pointerEvents = 'auto'

          NS.dragPointer[pointer].svgBox.querySelectorAll(':scope g')[0].style.opacity = 1

          NS.dragPointer[pointer].element.setAttribute('contenteditable', 'false')

          delete NS.dragPointer[pointer].targeted
        }
      }

      if (forceRender === 'vector') {

        // Editable path selector

      }

      if (forceRender === 'transform') {

        // Global bounding box

      }
    }
  }

  NS.targetSelect = function (evt) {
    if (evt.target.matches('div.target')) {
      var targetArray = document.elementsFromPoint(evt.x, evt.y),
        targetElement

      if (evt.shiftKey === false) { NS.dragPointer = []; evt.target.innerHTML = '' }

      // Get rid of window, document, html, body & target
      targetArray = targetArray.slice(1)
      targetArray.reverse()

      // Get rid of unwanted

      for (var i = targetArray.length - 1; i >= 0; i--) {
        if (!targetArray[i].matches('.elements > *')) {
          targetArray.splice(i, 1)
        } else {
          // If target is not a canvas element there's no transparency test so break the statement as target[0] is the element we're looking for like p or an SVG element.
          if (!targetArray[i].matches('canvas')) {
            if (targetArray[i].matches('rect, circle, path, ellipse, line, polygon, polyline')) {
              targetElement = targetArray[i].parentNode
            } else {
              targetElement = targetArray[i]
            }

            break
          }

          // If the nearest target is a canvas element then do a transparency test.
          if (targetArray[i].nodeName.match(/canvas/i)) {
            targetElement = targetArray[i]
            // Run through the transparency test here

            break
          }
        }
      }

      if (targetElement) {
        NS.dragPointer.push({ 'element': targetElement, svgBox: false })
        NS.renderSelect()
      }

      mouseDown(evt, true)
    }

    if (evt.target.matches('div.target rect')) {
      // Already selected element

      if (evt.shiftKey === true) {
        var pointer = parseInt(evt.target.parentNode.getAttribute('data-drag-pointer'))

        NS.dragPointer.splice(pointer, 1)
        evt.target.parentNode.remove()

        for (var i = 0; i < NS.dragPointer.length; i++) {
          NS.dragPointer[i].svgBox.setAttribute('data-drag-pointer', i)
        }
      } else {
        mouseDown(evt, true)
      }
    }
  }

  if (document.getElementById('content')) {
    document.getElementById('content').addEventListener(NS.evtmap.mousedown, NS.targetSelect)
  }

  var zoomFactor

  function mouseDown (e, bypass) {
    if (e.target.matches('*[data-drag]') || bypass === true) {
      zoomFactor = app.PTZoom.get() / 100

      for (var i = NS.dragPointer.length - 1; i >= 0; i--) {
        var el = NS.dragPointer[i].element

        NS.dragPointer[i].x_elem = Math.round(e.x / zoomFactor - parseInt(el.style.left))
        NS.dragPointer[i].y_elem = Math.round(e.y / zoomFactor - parseInt(el.style.top))
      }

      window.addEventListener(NS.evtmap.mousemove, dragDiv, true)
    }
  }

  function dragDiv (e) {
    NS.targetSVG.innerHTML = ''

    for (var i = NS.dragPointer.length - 1; i >= 0; i--) {
      NS.dragPointer[i].svgBox = false
      NS.dragPointer[i].element.style.left = Math.round(e.x / zoomFactor - NS.dragPointer[i].x_elem) + 'px'
		    	NS.dragPointer[i].element.style.top = Math.round(e.y / zoomFactor - NS.dragPointer[i].y_elem) + 'px'
    }
  }

  window.addEventListener(NS.evtmap.mouseup, function () {
    window.removeEventListener(NS.evtmap.mousemove, dragDiv, true)

    NS.renderSelect()
  }, false)

  // Double click on paragraph bring to front / blur send back and bring div.target over the top

  document.addEventListener(NS.evtmap.dblclick, function (evt) {
    if (evt.target.matches('svg[data-type="p"] > rect')) {
      NS.renderSelect('text', evt.target.parentNode.getAttribute('data-drag-pointer'))
    }
  })

  // Any element that looses focus will be removed
  document.addEventListener('focusout', function (evt) {
    if (evt.target.matches('.elements *')) {
      NS.renderSelect('text', 0)
    }
  })

  // Sortable API and structure are found in sortable.js plugin, the namespace is app.UI.sortable.
})()
