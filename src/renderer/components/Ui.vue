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

		<div class="color-overlay">
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
		</div>

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
</style>

<style lang="scss">
$orange: rgba(255, 134, 34, 0.3);
#wrapper {
	display: flex;
	flex-direction: column;
	padding: 15px;
	align-items: center;

	> * {
		margin-top: 15px;
	}
	> *:first-child {
		margin-top: 0px;
	}
}
html,
body {
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.45);
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  color: #666;
}
// Layout
hr {
	width: 100vw;
	height: 1px;
	position: relative;
	left: -15px;
	appearance: none;
	border: none;
	background: rgba(0,0,0,0.05);
}
.row {
  display: flex;
}
.row--wrap {
  flex-wrap: wrap;
  max-width: 100%;
}
.panel-row {
	display: flex;
	width: 100%;
	justify-content: space-between;
}
.panel {
	display: flex;
	align-items: center;
	justify-content: center;
	width: calc(50% - 7.5px);
	background: rgba(255,255,255,0.35);
	border-radius: 3px;
	padding: 15px 0;
}
// UI
input[type='text'],
input[type='search'],
select,
textarea,
button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	min-height: 20px;
	margin: 0;
	box-shadow: 0 2px 5px rgba(0,0,0,0.12);
	background: rgba(255, 255, 255, 0.45);
}
input[type='text']:focus,
input[type='search']:focus,
select:focus,
textarea:focus,
button:focus {
	outline-style: solid;
	outline-width: 2px;
	outline-color: $orange;
}
.field_ui {
	width: 100%;
	position: relative;
	.fa {
		position: absolute;
		left: 5px;
		top: 0;
    height: 25px;
    display: flex;
		align-items: center;
		
		~ input {
			padding-left: 21px;

			~ select {
				background-color: transparent;
				box-shadow: none;
				position: absolute;
				width: auto;
				top: 0;
				right: 0;
				outline-style: none;
			}
		}
	}
}
input,
select,
textarea {
	font-size: 10px;
	letter-spacing: -0.01em;
	width: 100%;
}
input[type='text'] {
  display: block;
  box-sizing: border-box;
  height: 25px;
  color: #333;
  padding: 6px 6px;
  border: none;
  border-radius: 2px;
}
.search {
  border-radius: 20px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
}
select {
  -webkit-appearance: none;
  padding: 0 27px 0 10px;
  line-height: 25px;
  border-radius: 2px;
  border: none;
  background: url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" width="10" height="15"><path d="M5 0 L0 6 L10 6 Z" fill="#444" /><path d="M5 15 L0 9 L10 9 Z" fill="#444" /></svg>') right 10px center no-repeat rgba(255,255,255,0.45);
  background-size: auto 10px;
}
::-webkit-input-placeholder {
  text-transform: capitalize;
  color: #aaa;
}

input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
	height: 14px;
	background: rgba(0,0,0,.1);
	border-radius: 10px;
	padding: 0 3px;
	box-sizing: border-box;
	outline-style: none;
}

input[type=range]::-webkit-slider-thumb {
	-webkit-appearance: none;
	width: 10px;
	height: 10px;
	background: white;
	border-radius: 20px;
	box-shadow: 0px 1px 2px rgba(0,0,0,0.4);
}

.tabs {
  display: inline-flex;
  line-height: 20px;
  border-radius: 2px;
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
  border: 2px solid rgba(0,0,0,0.15);
  user-select: none;
}

.tabs span {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
  border-right: 2px solid rgba(0,0,0,0.15);
  background: transparent;
  transition: background 0.2s, border 0.2s;
}

.tabs span.active {
  background:rgba(0,0,0,0.15);
  border-color: transparent;
}

.tabs span:last-child {
  border-right: 0;
}

button {
  appearance: none;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.45);
  border: none;
  padding: 5px 11px;
  font-size: 8px;
	text-transform: uppercase;
	outline-style: none;

  &:active {
    background: $orange;
  }
}
.buttonGroup {
	display: flex;
	border-radius: 3px;
	box-shadow: 0 2px 5px rgba(0,0,0,0.12);
	background: rgba(255, 255, 255, 0.45);
	button {
		box-shadow: none;
		border-radius: 0px;
	}
}
.radial {
  display: inline-flex;
  width: 40px;
  height: 40px;
  left: 200px;
  top: 200px;
  margin: 0 auto;
  border-radius: 50px;
	transform: rotate(0deg);
	background: rgba(255,255,255,0.45);
	box-shadow: 0px 0px 8px rgba(0,0,0,0.2);
}

.radial:before {
  content: "";
  position: absolute;
  display: inline-block;
  width: 6px;
  height: 6px;
  top: 3px;
  left:50%;
  margin-left:-3px;
  border-radius: 10px;
  background: #333;
}
.groupValsRadial {
	display: flex;
	flex-direction: column;

	input {
		margin-top: -80px;
		background: #333;
		box-shadow: none;
		color: white;
		text-align: center;
		width: 55px;
		opacity: 0;
		transition: opacity 0.2s;
	}

	&:active input {
		opacity: 1;
	}
}
// color-picker
.color-picker {
	width: 30px;
	background: rgb(56, 218, 148);
}
.color-overlay {
	display: flex;
	flex-direction: column;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	margin: 0 !important;
	z-index: 10;
	background: rgba(238, 238, 238, 0.55);
	backdrop-filter: blur(5px) grayscale(100);
	.swatches {
		display: flex;
		position: relative;
    justify-content: center;
    align-items: center;
    padding: 15px 15px 0 15px;
		flex-wrap: wrap;
		overflow: auto;
		max-height: 50vh;
		right: -15px;
		button {
			margin-right: 15px;
			margin-bottom: 15px;
		}
	}
	.preview {
		position: relative;
		transition: background-color 0.3s ease-in-out;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		transition: justify-content 0.2s, align-items 0.2s;

		.panel {
			position: absolute;
			width: 60%;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			padding: 15px;
			transform: scale(1,1);
			transition: opacity 0.2s, transform 0.2s;
			label {
				padding: 10px 0 5px 0;
			}
			> *:first-child {
				padding-top: 0;
			}
		}
		button {
			margin-top: 10px;
			justify-self: center;
			background: rgba(255, 255, 255, 0.8);
		}
		.shade {
			width: 100%;
			flex-grow: 0;
			transition: flex-grow 0.2s;
		}
		&.preview-shades {
			justify-content: flex-start;
			align-items: flex-start;
			.panel {
				opacity: 0;
				transform: scale(0,0);
			}
			.shade {
				flex-grow: 5;
			}
		}
	}
}
</style>
