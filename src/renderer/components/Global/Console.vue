<template>
    <section v-if="this.$store.state.console.displayConsole" class="console">
        <header>
            <nav>
                <button>MESSAGES</button>
                <button>OUTPUT</button>
                <button>TERMINAL</button>
            </nav>
            <div class="right">
                <select>
                    <option value="">1: Blank Canvas Feathers</option>
                    <option value="">2: Terminal</option>
                    <option value="">3: Terminal</option>
                </select>
                <button id="new-terminal">+</button>
                <button id="delete">Del</button>
                <button id="full-view">Full View</button>
                <button id="close" @click="$store.dispatch('displayConsole', false)">X</button>
            </div>
        </header>
        <section class="terminals">
            <iframe class="terminal" src="http://localhost:8088/terminal/"/>
        </section>
        <footer class="status-bar">
            <select>
                <option value="">master</option>
                <option value="">develop</option>
            </select>
            <button>refresh</button>
            <button>git conflicts</button>
        </footer>
    </section>
</template>

<script>
import execSh from 'exec-sh'
export default {
    name: 'Console',
    mounted() {
        
        // const shell = require('shelljs')

        //  shell.exec('ls -a')

        // shell.cd('~/')

        // console.log('SHELL', shell.exec('/usr/bin/ls -a'))

        // const Shell = require('node-powershell');
 
        // const ps = new Shell({
        // executionPolicy: 'Bypass',
        // noProfile: true
        // });
        
        // ps.addCommand('echo node-powershell');
        // ps.invoke()
        // .then(output => {
        // console.log('OUTTT!!!', output);
        // })
        // .catch(err => {
        // console.log('OUTTT!!!', err);
        // });

//         var execShPromise = require("exec-sh").promise;
 
// // run interactive bash shell
// const run = async () => {
//   let out;
  
//   try {
//     out = await execShPromise('cd ./blankcanvas-feathers && yarn dev', true);
//   } catch (e) {
//     console.log('Error: ', e);
//     console.log('Stderr: ', e.stderr);
//     console.log('Stdout: ', e.stdout);
    
//     return e;
//   }
  
//   console.log('out: ', out.stdout, out.stderr);
// }
 
// run();
    }
}
</script>

<style lang="scss" scoped>
.console {
    position: fixed;
    display: flex;
    flex-direction: column;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 200px;
    background: #222;
    color: white;
    z-index: 100;

    button {
        color: white;
        background: transparent;
    }
    header {
        display: flex;
        padding: 5px 5px 5px 10px;
        justify-content: space-between;

        button {
            border-radius: 0px;
            box-shadow: none;
            border-bottom: 1px solid #ccc;
            white-space: nowrap;
            margin-right: 10px;
            outline: none !important;
        }
        .right {
            display: flex;
            align-self: flex-end;
        }
        select {
            margin-right: 10px;
            padding-right: 15px;
            box-shadow: none;
            background: #f3f3f3;
        }
        ~ * {
            flex-grow: 1;
        }
    }
    footer {
        display: flex;
        flex-grow: 0;
        padding: 5px 5px 5px 10px;
        background: rgb(62, 128, 214);
        align-items: flex-start;

        > * {
            white-space: nowrap;
            margin-right: 10px;
        }
    }
    .terminals {
        display: flex;
        border: none;

        .terminal {
            width: 100%;
            // display: flex;
            flex-grow: 1;
        }
    }
}
</style>