<template>
  <div id="wrapper">

		<input type="text" value="Hello Design">
			
		<div class="field_ui " >
			<i class="fa fa-edit"></i>
			<input type="text" value="Hello Design">      
		</div>

		<div class="field_ui" >
				<i class="fa fa-rocket"></i>
				<input type="text" value="Hello Design">
				<select>
					<option>px</option>
					<option>pt</option>
					<option>mm</option>
					<option>cm</option>
				</select>
		</div>

		<select>
			<option>normal</option>
			<option>multiply</option>
			<option>overlay</option>
			<option>difference</option>
		</select>

		<button><span>Button</span></button>

		<button class="color-picker"></button>

		<!-- <div class="color-overlay">
			<div class="swatches">
				<button style="background:#333;" />
				<button style="background:#444;" />
				<button style="background:#555;" />
				<button style="background:#666;" />
				<button style="background:#777;" />
				<button style="background:#888;" />
				<button style="background:#999;" />
				<button style="background:#333;" />
				<button style="background:#444;" />
				<button style="background:#555;" />
				<button style="background:#666;" />
				<button style="background:#777;" />
				<button style="background:#888;" />
				<button style="background:#999;" />
			</div>
			<div :class="['preview', { 'preview-shades': previewShades }]" style="background:rgb(56, 218, 148);">
				<div class="shade" style="background:rgb(34, 247, 156);" />
				<div class="shade" style="background:rgb(46, 242, 158);" />
				<div class="shade" style="background:rgb(50, 239, 158);" />
				<div class="shade" style="background:rgb(53, 234, 156);" />
				<div class="shade" style="background:rgb(54, 226, 152);" />
				<div class="shade" style="background:rgb(56, 218, 148);" />
				<div class="shade" style="background:rgb(48, 193, 130);" />
				<div class="shade" style="background:rgb(45, 183, 123);" />
				<div class="shade" style="background:rgb(40, 168, 112);" />
				<div class="shade" style="background:rgb(38, 160, 107);" />
				<div class="shade" style="background:rgb(32, 142, 95);" />
				
				<div class="panel">
					<label>Hue</label>
					<input type="range" >
					<label>Saturation</label>
					<input type="range" >
					<label>Lightness</label>
					<input type="range" >
					<button @click="previewShades = true">Shades</button>
				</div>
			</div>
		</div> -->

		<div class="buttonGroup  single">
			<button class="active fa fa-paragraph"></button>
			<button class="fa fa-font"></button>
			<button class="fa fa-font"></button>
		</div>

		<input type="range" >

		<div class="panel-row">

			<div class="panel">
				<div class="radial "></div>
			</div>

			<div class="panel">
				<form class="groupValsRadial" >
					<div class="radial "></div>
					<div class="field_ui">
						<input type="text" autocomplete="off" value="0">
					</div>
				</form>
			</div>
		</div>
		<hr>
  </div>
</template>

<script>
export default {
  name: 'landing-page',
  data () {
    return {
      // color picker
      previewShades: false
    }
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
body { font-family: 'Open Sans', sans-serif; }
#wrapper {
	height: 100vh;
	width: 100vw;
	overflow-y: scroll;
	box-sizing: border-box;
	overflow-x: hidden;
}
</style>