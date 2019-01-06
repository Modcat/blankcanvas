var mContainer;
var mCamera, mRenderer;
var mControls;

var mShadowColor = 0xac3b5f; //0x1B0914

var mScene;
var mLight;
var mLight2;
var mLight3;

var mUseAA = true;
var mParticleCount = 391000;
var mParticleSystem;

var mDuration;
var mPathLength = 32;

var mAudioElement = document.getElementById('song');
var mAnalyser;

var mPlayBtn = document.querySelector('.play-btn');
var mPlayBtnContainer = document.querySelector('.container');

mPlayBtn.addEventListener('click', function() {
	
	mAnalyser.context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
	
	mPlayBtnContainer.style.display = 'none';
	mAudioElement.currentTime = 0;
	mAudioElement.play();
	
	mCamera.position.set(0, 0, 1200);
});
mAudioElement.addEventListener('ended', function() {
		mPlayBtnContainer.style.display = 'flex';
})


window.onload = function () {
  init();
};

function init() {
  initAudio();
  initTHREE();
  initControls();
  initParticleSystem();

  requestAnimationFrame(tick);
  window.addEventListener('resize', resize, false);
}

function initAudio() {
  mAudioElement.crossOrigin = "anonymous";
  // mAudioElement.src = 'https://raw.githubusercontent.com/zadvorsky/three.bas/master/examples/_audio/song.mp3';
  mAudioElement.src = './js/dancers.mp3';

  mAnalyser = new SpectrumAnalyzer(mPathLength * 0.5, 0.80);
  mAnalyser.setSource(mAudioElement);
}

function initTHREE() {
  mRenderer = new THREE.WebGLRenderer({antialias: mUseAA});
  mRenderer.setSize(window.innerWidth, window.innerHeight);
  mRenderer.setClearColor(0xffffff);
  // mRenderer.setClearColor(mShadowColor);

  mContainer = document.getElementById('three-container');
  mContainer.appendChild(mRenderer.domElement);

  mCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000);
  mCamera.position.set(0, 0, 1200);

  mScene = new THREE.Scene();

  mLight = new THREE.PointLight(0xffffff, 5, 1200, 2);
  mLight.position.set(0, 0, 0);
  mScene.add(mLight);

  mLight2 = new THREE.DirectionalLight(0xFF311F, 0.25);
  mLight2.position.set(0, 1, 1);
  mScene.add(mLight2);

  mLight3 = new THREE.DirectionalLight(0x007A99, 0.25);
  mLight3.position.set(0, 1, -1);
  mScene.add(mLight3);
}

function initControls() {
  mControls = new THREE.OrbitControls(mCamera, mRenderer.domElement);
  mControls.autoRotate = true;
  mControls.enableZoom = true;
  mControls.enablePan = false;
	mControls.constraint.minDistance = 10;
	mControls.constraint.maxDistance = 1200;
  mControls.constraint.minPolarAngle = Math.PI * 0.4;
	mControls.constraint.maxPolarAngle = Math.PI * 0.6;
}

function initParticleSystem() {
  var prefabGeometry = new THREE.PlaneGeometry(4, 4);
  var bufferGeometry = new THREE.BAS.PrefabBufferGeometry(prefabGeometry, mParticleCount);

  //bufferGeometry.computeVertexNormals();

  // generate additional geometry data
  var aDelayDuration = bufferGeometry.createAttribute('aDelayDuration', 2);
  var aPivot = bufferGeometry.createAttribute('aPivot', 3);
  var aAxisAngle = bufferGeometry.createAttribute('aAxisAngle', 4);
  var aColor = bufferGeometry.createAttribute('color', 3);

  var i, j, offset;

  // buffer time offset
  var delay;
  var duration;
  var prefabDelay = 0.00015;
  var vertexDelay = 0.0175;
  var minDuration = 32.0;
  var maxDuration = 56.5;

  mDuration = maxDuration + prefabDelay * mParticleCount + vertexDelay * prefabGeometry.vertices.length;

  for (i = 0, offset = 0; i < mParticleCount; i++) {
    delay = i * prefabDelay;
    duration = THREE.Math.randFloat(minDuration, maxDuration);

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aDelayDuration.array[offset++] = delay + j * vertexDelay;
      aDelayDuration.array[offset++] = duration;
    }
  }

  // buffer pivot
  var pivot = new THREE.Vector3();

  for (i = 0, offset = 0; i < mParticleCount; i++) {
    pivot.x = THREE.Math.randFloat(0, 2);
    pivot.y = THREE.Math.randFloat(0, 2);
    pivot.z = THREE.Math.randFloat(0, 2);

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aPivot.array[offset++] = pivot.x;
      aPivot.array[offset++] = pivot.y;
      aPivot.array[offset++] = pivot.z;
    }
  }

  // buffer axis angle
  var axis = new THREE.Vector3();
  var angle = 0;

  for (i = 0, offset = 0; i < mParticleCount; i++) {
    axis.x = THREE.Math.randFloatSpread(2);
    axis.y = THREE.Math.randFloatSpread(2);
    axis.z = THREE.Math.randFloatSpread(2);
    axis.normalize();

    angle = Math.PI * THREE.Math.randInt(48, 64);

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aAxisAngle.array[offset++] = axis.x;
      aAxisAngle.array[offset++] = axis.y;
      aAxisAngle.array[offset++] = axis.z;
      aAxisAngle.array[offset++] = angle;
    }
  }

  // buffer color
  var color = new THREE.Color();
  var h, s, l;

  for (i = 0, offset = 0; i < mParticleCount; i++) {
    //h = i / mParticleCount;
    h = THREE.Math.randFloat(0.5, 1.00);
    s = THREE.Math.randFloat(0.5, 0.75);
    l = THREE.Math.randFloat(0.25, 0.5);

    color.setHSL(h, s, l);

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aColor.array[offset++] = color.r;
      aColor.array[offset++] = color.g;
      aColor.array[offset++] = color.b;
    }
  }

  // buffer spline (uniform)
  var pathArray = [];
  var radiusArray = [];
  var length = mPathLength;
  var x, y, z;

  for (i = 0; i < length; i++) {
    if (!i) {
      x = 0;
      y = -1400;
      z = 0;
    }
    else if (!(i - length + 1)) {
      x = 0;
      y = 1200;
      z = 0;
    }
    else {
      x = THREE.Math.randFloatSpread(600);
      y = (-400 + (800 / length) * i) + THREE.Math.randFloatSpread(200);
      z = THREE.Math.randFloatSpread(600);
    }

    pathArray.push(x, y, z);
    radiusArray.push(0);
  }

  var material = new THREE.BAS.PhongAnimationMaterial(
    // custom parameters & THREE.MeshPhongMaterial parameters
    {
      vertexColors: THREE.VertexColors,
      shading: THREE.FlatShading,
      side: THREE.DoubleSide,
      defines: {
        PATH_LENGTH:pathArray.length / 3
      },
      uniforms: {
        uTime: {type: 'f', value: 0},
        uPath: {type: 'fv', value: pathArray},
        uRadius: {type: 'fv1', value: radiusArray},
        uRoundness: {type: 'v2', value: new THREE.Vector2(2, 2)}
      },
      shaderFunctions: [
        THREE.BAS.ShaderChunk['quaternion_rotation'],
        THREE.BAS.ShaderChunk['catmull-rom'],
        THREE.BAS.ShaderChunk['ease_in_out_cubic']
      ],
      shaderParameters: [
        'uniform float uTime;',
        'uniform vec3 uPath[PATH_LENGTH];',
        'uniform float uRadius[PATH_LENGTH];',
        'uniform vec2 uRoundness;',
        'attribute vec2 aDelayDuration;',
        'attribute vec3 aPivot;',
        'attribute vec4 aAxisAngle;'
      ],
      shaderVertexInit: [
        'float tDelay = aDelayDuration.x;',
        'float tDuration = aDelayDuration.y;',
        'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',
        'float tProgress = tTime / tDuration;',

        'float angle = aAxisAngle.w * tProgress;',
        'vec4 tQuat = quatFromAxisAngle(aAxisAngle.xyz, angle);'
      ],
      shaderTransformNormal: [
        'objectNormal = rotateVector(tQuat, objectNormal);'
      ],
      shaderTransformPosition: [
        'float tMax = float(PATH_LENGTH - 1);',
        'float tPoint = tMax * tProgress;',
        'float tIndex = floor(tPoint);',
        'float tWeight = tPoint - tIndex;',

        'int i0 = int(max(0.0, tIndex - 1.0));',
        'int i1 = int(tIndex);',
        'int i2 = int(min(tIndex + 1.0, tMax));',
        'int i3 = int(min(tIndex + 2.0, tMax));',
        'vec3 p0 = uPath[i0];',
        'vec3 p1 = uPath[i1];',
        'vec3 p2 = uPath[i2];',
        'vec3 p3 = uPath[i3];',

        'float radius = catmullRom(uRadius[i0], uRadius[i1], uRadius[i2], uRadius[i3], tWeight);',
        'transformed += aPivot * radius;',

        'transformed = rotateVector(tQuat, transformed);',

        'transformed += catmullRom(p0, p1, p2, p3, uRoundness, tWeight);'
      ]
    },
    // THREE.MeshPhongMaterial uniforms
    {
      shininess: 16,
      specular: 0xffd700,
      emissive: mShadowColor
    }
  );

  mParticleSystem = new THREE.Mesh(bufferGeometry, material);
  mParticleSystem.frustumCulled = false;

  mScene.add(mParticleSystem);
}

function tick() {
  update();
  render();

  requestAnimationFrame(tick);
}

function update() {
  mControls.update();
  mAnalyser.updateSample();

  var uniform = mParticleSystem.material.uniforms['uRadius'].value;
  var data = mAnalyser.frequencyByteData;

  var dataArray = [];
  var cap = data.length * 0.5;
  var i;

  //for (i = cap - 1; i >= 0; i--) {
  for (i = 0; i < cap; i++) {
    dataArray.push(data[i]);
  }

  for (i = cap - 1; i >= 0; i--) {
  //for (i = 0; i < cap; i++) {
    dataArray.push(data[i]);
  }

  //for (i = cap - 1; i >= 0; i--) {
  for (i = 0; i < cap; i++) {
    dataArray.push(data[i]);
  }

  for (i = cap - 1; i >= 0; i--) {
  //for (i = 0; i < cap; i++) {
    dataArray.push(data[i]);
  }

  for (i = 0; i < dataArray.length; i++) {
    if (i && dataArray.length - i > 1) {
      var val = dataArray[i] / 255;
      uniform[i] = Math.max(1, val * val * val * 48);
    }
    else {
      uniform[i] = 128;
    }
  }

  var a0 = mAnalyser.getAverageFloat();
  var r = 8 * a0 * a0 * a0 + 1;
  mParticleSystem.material.uniforms['uRoundness'].value.set(r, r);

  var a1 = mAnalyser.getAverageFloat() * 2;
  mLight.intensity = a1 * a1;
  mLight2.intensity = a1 * a1 * a1 * a1 * 0.5;
  mLight3.intensity = a1 * a1 * a1 * a1 * 0.5;

  mParticleSystem.material.uniforms['uTime'].value = mAudioElement.currentTime || 0;
}

function render() {
  mRenderer.render(mScene, mCamera);
}

function resize() {
  mCamera.aspect = window.innerWidth / window.innerHeight;
  mCamera.updateProjectionMatrix();

  mRenderer.setSize(window.innerWidth, window.innerHeight);
}

/////////////////////////////////
// Spectrum Analyser
/////////////////////////////////

// https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
function SpectrumAnalyzer(binCount, smoothingTimeConstant) {
  var Context = window["AudioContext"] || window["webkitAudioContext"];

  this.context = new Context();
  this.analyzerNode = this.context.createAnalyser();

  this.setBinCount(binCount);
  this.setSmoothingTimeConstant(smoothingTimeConstant);
}

SpectrumAnalyzer.prototype = {
  setSource: function (source) {
    //this.source = source;
    this.source = this.context.createMediaElementSource(source);
    this.source.connect(this.analyzerNode);
    this.analyzerNode.connect(this.context.destination);
  },

  setBinCount: function (binCount) {
    this.binCount = binCount;
    this.analyzerNode.fftSize = binCount * 2;

    this.frequencyByteData = new Uint8Array(binCount); 	// frequency
    this.timeByteData = new Uint8Array(binCount);		// waveform
  },

  setSmoothingTimeConstant: function (smoothingTimeConstant) {
    this.analyzerNode.smoothingTimeConstant = smoothingTimeConstant;
  },

  getFrequencyData: function () {
    return this.frequencyByteData;
  },

  getTimeData: function () {
    return this.timeByteData;
  },
  // not save if out of bounds
  getAverage: function (index, count) {
    var total = 0;
    var start = index || 0;
    var end = start + (count || this.binCount);

    for (var i = start; i < end; i++) {
      total += this.frequencyByteData[i];
    }

    return total / (end - start);
  },
  getAverageFloat:function(index, count) {
    return this.getAverage(index, count) / 255;
  },

  updateSample: function () {
    this.analyzerNode.getByteFrequencyData(this.frequencyByteData);
    this.analyzerNode.getByteTimeDomainData(this.timeByteData);
  }
};

///////////////
// buffer animation system 
///////////////

THREE.BAS = {};

THREE.BAS.ShaderChunk = {};

THREE.BAS.ShaderChunk["animation_time"] = "float tDelay = aAnimation.x;\nfloat tDuration = aAnimation.y;\nfloat tTime = clamp(uTime - tDelay, 0.0, tDuration);\nfloat tProgress = ease(tTime, 0.0, 1.0, tDuration);\n";

THREE.BAS.ShaderChunk["catmull-rom"] = "vec3 catmullRom(vec3 p0, vec3 p1, vec3 p2, vec3 p3, float t)\n{\n    vec3 v0 = (p2 - p0) * 0.5;\n    vec3 v1 = (p3 - p1) * 0.5;\n    float t2 = t * t;\n    float t3 = t * t * t;\n\n    return vec3((2.0 * p1 - 2.0 * p2 + v0 + v1) * t3 + (-3.0 * p1 + 3.0 * p2 - 2.0 * v0 - v1) * t2 + v0 * t + p1);\n}\n\nvec3 catmullRom(vec3 p0, vec3 p1, vec3 p2, vec3 p3, vec2 c, float t)\n{\n    vec3 v0 = (p2 - p0) * c.x;\n    vec3 v1 = (p3 - p1) * c.y;\n    float t2 = t * t;\n    float t3 = t * t * t;\n\n    return vec3((2.0 * p1 - 2.0 * p2 + v0 + v1) * t3 + (-3.0 * p1 + 3.0 * p2 - 2.0 * v0 - v1) * t2 + v0 * t + p1);\n}\n\nfloat catmullRom(float p0, float p1, float p2, float p3, float t)\n{\n    float v0 = (p2 - p0) * 0.5;\n    float v1 = (p3 - p1) * 0.5;\n    float t2 = t * t;\n    float t3 = t * t * t;\n\n    return float((2.0 * p1 - 2.0 * p2 + v0 + v1) * t3 + (-3.0 * p1 + 3.0 * p2 - 2.0 * v0 - v1) * t2 + v0 * t + p1);\n}\n\nfloat catmullRom(float p0, float p1, float p2, float p3, vec2 c, float t)\n{\n    float v0 = (p2 - p0) * c.x;\n    float v1 = (p3 - p1) * c.y;\n    float t2 = t * t;\n    float t3 = t * t * t;\n\n    return float((2.0 * p1 - 2.0 * p2 + v0 + v1) * t3 + (-3.0 * p1 + 3.0 * p2 - 2.0 * v0 - v1) * t2 + v0 * t + p1);\n}\n";

THREE.BAS.ShaderChunk["cubic_bezier"] = "vec3 cubicBezier(vec3 p0, vec3 c0, vec3 c1, vec3 p1, float t)\n{\n    vec3 tp;\n    float tn = 1.0 - t;\n\n    tp.xyz = tn * tn * tn * p0.xyz + 3.0 * tn * tn * t * c0.xyz + 3.0 * tn * t * t * c1.xyz + t * t * t * p1.xyz;\n\n    return tp;\n}\n";

THREE.BAS.ShaderChunk["ease_in_cubic"] = "float ease(float t, float b, float c, float d) {\n  return c*(t/=d)*t*t + b;\n}\n";

THREE.BAS.ShaderChunk["ease_in_out_cubic"] = "float ease(float t, float b, float c, float d) {\n  if ((t/=d/2.0) < 1.0) return c/2.0*t*t*t + b;\n  return c/2.0*((t-=2.0)*t*t + 2.0) + b;\n}\n";

THREE.BAS.ShaderChunk["ease_in_quad"] = "float ease(float t, float b, float c, float d) {\n  return c*(t/=d)*t + b;\n}\n";

THREE.BAS.ShaderChunk["ease_out_cubic"] = "float ease(float t, float b, float c, float d) {\n  return c*((t=t/d - 1.0)*t*t + 1.0) + b;\n}\n";

THREE.BAS.ShaderChunk["quaternion_rotation"] = "vec3 rotateVector(vec4 q, vec3 v)\n{\n    return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);\n}\n\nvec4 quatFromAxisAngle(vec3 axis, float angle)\n{\n    float halfAngle = angle * 0.5;\n    return vec4(axis.xyz * sin(halfAngle), cos(halfAngle));\n}\n";


THREE.BAS.PrefabBufferGeometry = function (prefab, count) {
  THREE.BufferGeometry.call(this);

  this.prefabGeometry = prefab;
  this.prefabCount = count;
  this.prefabVertexCount = prefab.vertices.length;

  this.bufferDefaults();
};
THREE.BAS.PrefabBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.BAS.PrefabBufferGeometry.prototype.constructor = THREE.BAS.PrefabBufferGeometry;

THREE.BAS.PrefabBufferGeometry.prototype.bufferDefaults = function () {
  var prefabFaceCount = this.prefabGeometry.faces.length;
  var prefabIndexCount = this.prefabGeometry.faces.length * 3;
  var prefabVertexCount = this.prefabVertexCount = this.prefabGeometry.vertices.length;
  var prefabIndices = [];

  //console.log('prefabCount', this.prefabCount);
  //console.log('prefabFaceCount', prefabFaceCount);
  //console.log('prefabIndexCount', prefabIndexCount);
  //console.log('prefabVertexCount', prefabVertexCount);
  //console.log('triangles', prefabFaceCount * this.prefabCount);

  for (var h = 0; h < prefabFaceCount; h++) {
    var face = this.prefabGeometry.faces[h];
    prefabIndices.push(face.a, face.b, face.c);
  }

  var indexBuffer = new Uint32Array(this.prefabCount * prefabIndexCount);
  var positionBuffer = new Float32Array(this.prefabCount * prefabVertexCount * 3);

  this.setIndex(new THREE.BufferAttribute(indexBuffer, 1));
  this.addAttribute('position', new THREE.BufferAttribute(positionBuffer, 3));

  for (var i = 0, offset = 0; i < this.prefabCount; i++) {
    for (var j = 0; j < prefabVertexCount; j++, offset += 3) {
      var prefabVertex = this.prefabGeometry.vertices[j];

      positionBuffer[offset    ] = prefabVertex.x;
      positionBuffer[offset + 1] = prefabVertex.y;
      positionBuffer[offset + 2] = prefabVertex.z;
    }

    for (var k = 0; k < prefabIndexCount; k++) {
      indexBuffer[i * prefabIndexCount + k] = prefabIndices[k] + i * prefabVertexCount;
    }
  }
};

// todo test
THREE.BAS.PrefabBufferGeometry.prototype.bufferUvs = function() {
  var prefabFaceCount = this.prefabGeometry.faces.length;
  var prefabVertexCount = this.prefabVertexCount = this.prefabGeometry.vertices.length;
  var prefabUvs = [];

  for (var h = 0; h < prefabFaceCount; h++) {
    var face = this.prefabGeometry.faces[h];
    var uv = this.prefabGeometry.faceVertexUvs[0][h];

    prefabUvs[face.a] = uv[0];
    prefabUvs[face.b] = uv[1];
    prefabUvs[face.c] = uv[2];
  }

  var uvBuffer = this.createAttribute('uv', 2);

  for (var i = 0, offset = 0; i < this.prefabCount; i++) {
    for (var j = 0; j < prefabVertexCount; j++, offset += 2) {
      var prefabUv = prefabUvs[j];

      uvBuffer.array[offset] = prefabUv.x;
      uvBuffer.array[offset + 1] = prefabUv.y;
    }
  }
};

/**
 * based on BufferGeometry.computeVertexNormals
 * calculate vertex normals for a prefab, and repeat the data in the normal buffer
 */
THREE.BAS.PrefabBufferGeometry.prototype.computeVertexNormals = function () {
  var index = this.index;
  var attributes = this.attributes;
  var positions = attributes.position.array;

  if (attributes.normal === undefined) {
    this.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(positions.length), 3));
  }

  var normals = attributes.normal.array;

  var vA, vB, vC,

  pA = new THREE.Vector3(),
  pB = new THREE.Vector3(),
  pC = new THREE.Vector3(),

  cb = new THREE.Vector3(),
  ab = new THREE.Vector3();

  var indices = index.array;
  var prefabIndexCount = this.prefabGeometry.faces.length * 3;

  for (var i = 0; i < prefabIndexCount; i += 3) {
    vA = indices[i + 0] * 3;
    vB = indices[i + 1] * 3;
    vC = indices[i + 2] * 3;

    pA.fromArray(positions, vA);
    pB.fromArray(positions, vB);
    pC.fromArray(positions, vC);

    cb.subVectors(pC, pB);
    ab.subVectors(pA, pB);
    cb.cross(ab);

    normals[vA] += cb.x;
    normals[vA + 1] += cb.y;
    normals[vA + 2] += cb.z;

    normals[vB] += cb.x;
    normals[vB + 1] += cb.y;
    normals[vB + 2] += cb.z;

    normals[vC] += cb.x;
    normals[vC + 1] += cb.y;
    normals[vC + 2] += cb.z;
  }

  for (var j = 1; j < this.prefabCount; j++) {
    for (var k = 0; k < prefabIndexCount; k++) {
      normals[j * prefabIndexCount + k] = normals[k];
    }
  }

  this.normalizeNormals();

  attributes.normal.needsUpdate = true;
};

THREE.BAS.PrefabBufferGeometry.prototype.createAttribute = function (name, itemSize) {
  var buffer = new Float32Array(this.prefabCount * this.prefabVertexCount * itemSize);
  var attribute = new THREE.BufferAttribute(buffer, itemSize);

  this.addAttribute(name, attribute);

  return attribute;
};

THREE.BAS.PrefabBufferGeometry.prototype.setAttribute4 = function (name, data) {
  var offset = 0;
  var array = this.geometry.attributes[name].array;
  var i, j;

  for (i = 0; i < data.length; i++) {
    var v = data[i];

    for (j = 0; j < this.prefabVertexCount; j++) {
      array[offset++] = v.x;
      array[offset++] = v.y;
      array[offset++] = v.z;
      array[offset++] = v.w;
    }
  }

  this.geometry.attributes[name].needsUpdate = true;
};
THREE.BAS.PrefabBufferGeometry.prototype.setAttribute3 = function (name, data) {
  var offset = 0;
  var array = this.geometry.attributes[name].array;
  var i, j;

  for (i = 0; i < data.length; i++) {
    var v = data[i];

    for (j = 0; j < this.prefabVertexCount; j++) {
      array[offset++] = v.x;
      array[offset++] = v.y;
      array[offset++] = v.z;
    }
  }

  this.geometry.attributes[name].needsUpdate = true;
};
THREE.BAS.PrefabBufferGeometry.prototype.setAttribute2 = function (name, data) {
  var offset = 0;
  var array = this.geometry.attributes[name].array;
  var i, j;

  for (i = 0; i < this.prefabCount; i++) {
    var v = data[i];

    for (j = 0; j < this.prefabVertexCount; j++) {
      array[offset++] = v.x;
      array[offset++] = v.y;
    }
  }

  this.geometry.attributes[name].needsUpdate = true;
};

THREE.BAS.BaseAnimationMaterial = function (parameters) {
  THREE.ShaderMaterial.call(this);

  this.shaderFunctions = [];
  this.shaderParameters = [];
  this.shaderVertexInit = [];
  this.shaderTransformNormal = [];
  this.shaderTransformPosition = [];

  this.setValues(parameters);
};
THREE.BAS.BaseAnimationMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
THREE.BAS.BaseAnimationMaterial.prototype.constructor = THREE.BAS.BaseAnimationMaterial;

// abstract
THREE.BAS.BaseAnimationMaterial.prototype._concatVertexShader = function () {
  return '';
};

THREE.BAS.BaseAnimationMaterial.prototype._concatFunctions = function () {
  return this.shaderFunctions.join('\n');
};
THREE.BAS.BaseAnimationMaterial.prototype._concatParameters = function () {
  return this.shaderParameters.join('\n');
};
THREE.BAS.BaseAnimationMaterial.prototype._concatVertexInit = function () {
  return this.shaderVertexInit.join('\n');
};
THREE.BAS.BaseAnimationMaterial.prototype._concatTransformNormal = function () {
  return this.shaderTransformNormal.join('\n');
};
THREE.BAS.BaseAnimationMaterial.prototype._concatTransformPosition = function () {
  return this.shaderTransformPosition.join('\n');
};


THREE.BAS.BaseAnimationMaterial.prototype.setUniformValues = function (values) {
  for (var key in values) {
    if (key in this.uniforms) {
      var uniform = this.uniforms[key];
      var value = values[key];

      // todo add matrix uniform types
      switch (uniform.type) {
        case 'c': // color
          uniform.value.set(value);
          break;
        case 'v2': // vectors
        case 'v3':
        case 'v4':
          uniform.value.copy(value);
          break;
        case 'f': // float
        case 't': // texture
        default:
          uniform.value = value;
      }
    }
  }
};

THREE.BAS.PhongAnimationMaterial = function(parameters, uniformValues) {
    THREE.BAS.BaseAnimationMaterial.call(this, parameters);

    var phongShader = THREE.ShaderLib['phong'];

    this.uniforms = THREE.UniformsUtils.merge([phongShader.uniforms, this.uniforms]);
    this.lights = true;
    this.vertexShader = this._concatVertexShader();
    this.fragmentShader = phongShader.fragmentShader;

    // todo add missing default defines
    uniformValues.map && (this.defines['USE_MAP'] = '');
    uniformValues.normalMap && (this.defines['USE_NORMALMAP'] = '');

    this.setUniformValues(uniformValues);
};
THREE.BAS.PhongAnimationMaterial.prototype = Object.create(THREE.BAS.BaseAnimationMaterial.prototype);
THREE.BAS.PhongAnimationMaterial.prototype.constructor = THREE.BAS.PhongAnimationMaterial;

THREE.BAS.PhongAnimationMaterial.prototype._concatVertexShader = function() {
    // based on THREE.ShaderLib.phong
    return [
        "#define PHONG",

        "varying vec3 vViewPosition;",

        "#ifndef FLAT_SHADED",

        "	varying vec3 vNormal;",

        "#endif",

        THREE.ShaderChunk[ "common" ],
        THREE.ShaderChunk[ "uv_pars_vertex" ],
        THREE.ShaderChunk[ "uv2_pars_vertex" ],
        THREE.ShaderChunk[ "displacementmap_pars_vertex" ],
        THREE.ShaderChunk[ "envmap_pars_vertex" ],
        THREE.ShaderChunk[ "lights_phong_pars_vertex" ],
        THREE.ShaderChunk[ "color_pars_vertex" ],
        THREE.ShaderChunk[ "morphtarget_pars_vertex" ],
        THREE.ShaderChunk[ "skinning_pars_vertex" ],
        THREE.ShaderChunk[ "shadowmap_pars_vertex" ],
        THREE.ShaderChunk[ "logdepthbuf_pars_vertex" ],

        this._concatFunctions(),

        this._concatParameters(),

        "void main() {",

        this._concatVertexInit(),

        THREE.ShaderChunk[ "uv_vertex" ],
        THREE.ShaderChunk[ "uv2_vertex" ],
        THREE.ShaderChunk[ "color_vertex" ],
        THREE.ShaderChunk[ "beginnormal_vertex" ],

        this._concatTransformNormal(),

        THREE.ShaderChunk[ "morphnormal_vertex" ],
        THREE.ShaderChunk[ "skinbase_vertex" ],
        THREE.ShaderChunk[ "skinnormal_vertex" ],
        THREE.ShaderChunk[ "defaultnormal_vertex" ],

        "#ifndef FLAT_SHADED", // Normal computed with derivatives when FLAT_SHADED

        "	vNormal = normalize( transformedNormal );",

        "#endif",

        THREE.ShaderChunk[ "begin_vertex" ],

        this._concatTransformPosition(),

        THREE.ShaderChunk[ "displacementmap_vertex" ],
        THREE.ShaderChunk[ "morphtarget_vertex" ],
        THREE.ShaderChunk[ "skinning_vertex" ],
        THREE.ShaderChunk[ "project_vertex" ],
        THREE.ShaderChunk[ "logdepthbuf_vertex" ],

        "	vViewPosition = - mvPosition.xyz;",

        THREE.ShaderChunk[ "worldpos_vertex" ],
        THREE.ShaderChunk[ "envmap_vertex" ],
        THREE.ShaderChunk[ "lights_phong_vertex" ],
        THREE.ShaderChunk[ "shadowmap_vertex" ],

        "}"

    ].join( "\n" );
};