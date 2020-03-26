<template>
    <FlexboxLayout class="c-ftp">
        <!-- Show either bookmarks, search or history -->
        <FlexboxLayout class="c-ftp__bookmarks">
            <ListView v-for="(note,noteIndex) in notebook" :key="noteIndex" @click="focusOnNote(note)" @itemTap="focusOnNote(note)">
                <v-template>
                    <Label :text="note.title"/>
                    <TextView :text="note.summary"/>
                </v-template>
            </ListView>
            <FlexboxLayout class="c-ftp__bookmarks__footer">
            </FlexboxLayout>
        </FlexboxLayout>
        <FlexboxLayout class="c-ftp__history">
        </FlexboxLayout>
        <FlexboxLayout class="c-ftp__search">
        </FlexboxLayout>
        <!-- Last two columns always on show -->
        <FlexboxLayout class="c-ftp__server">
            <FlexboxLayout class="c-ftp__toolbar">
                
            </FlexboxLayout>
        </FlexboxLayout>
        <FlexboxLayout class="c-ftp__client">
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script>
export default {
    name: 'FTP',
    data() {
        return {
            bookmarks: [],
            currentConnections: {},
            history: []
        }
    },
    computed: {
        renderTree() {
            // Items in list tree
            return []
        }
    },
    methods: {
        // Bookmarks
        addBookmark() {},
        editBookmark() {},
        removeBookmark() {},
        getLocalBookmarks() {},
        getBCFileBookmarks() {},

        // Connection
        connect() {},
        closeConnection() {},
        refreshConnection() {},

        // FTP
        upload() {},
        download() {},
        stopFTP() {},
        preFTPSync() {}, // To highlight files that need to be synced
        FTPSync() {},

        // Directory
        createDirectory() {},
        deleteDirectory() {},
        renameDirectory() {},
        
        // Files
        createFile() {},
        deleteFile() {},
        renameFile() {},
    }
}
</script>