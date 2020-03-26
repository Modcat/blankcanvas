<template>
  <FlexboxLayout class="c-notes">
      <FlexboxLayout class="c-notes__sidebar">
          <Label>Connections</Label>
          <FlexboxLayout class="c-notes__connections">
              <Label v-for="(connection, connectionId) in connections" :key="connectionId" text=""/>
          </FlexboxLayout>
          <Label>Favourtes</Label>
          <FlexboxLayout class="c-notes__favourtes">
              <Label v-for="(favourte, favourteId) in favourtes" :key="favourteId" text=""/>
          </FlexboxLayout>
          <Label>Notebooks</Label>
          <FlexboxLayout class="c-notes__notebooks">
              <Label v-for="(notebook,notebookId) in notebooks" :key="notebookId" text=""/>
          </FlexboxLayout>
          <Label>Tags</Label>
          <FlexboxLayout class="c-notes__tags">
              <Label v-for="(notebook,tagIndex) in tagged" :key="tagIndex" text=""/>
          </FlexboxLayout>
          <label>Shared</label>
          <FlexboxLayout class="c-notes__shared">
              <Label v-for="(notebook,sharedIndex) in shared" :key="sharedIndex" text=""/>
          </FlexboxLayout>
      </FlexboxLayout>
      <FlexboxLayout class="c-notes__notes">
        <ListView v-for="(note,noteIndex) in notebook" :key="noteIndex" @click="focusOnNote(note)" @itemTap="focusOnNote(note)">
            <v-template>
                <Label :text="note.title"/>
                <TextView :text="note.summary"/>
            </v-template>
        </ListView>
      </FlexboxLayout>
      <FlexboxLayout class="c-notes__notebook-editor">
          <!-- webview -->
      </FlexboxLayout>
  </FlexboxLayout>
</template>

<script>
export default {
    name: 'Notes',
    data() {
        return {
            // OPTIONAL Predefined connections to a notebook feathersJS service using NeDB
            // ELSE local filesystem is used
            connections: [
                // Global list concatinated with embedded notes in BC file
                {
                    name: 'Digital Ocean Droplet 001',
                    host: '',
                    // Username and password encryped in global BC keychain
                    // Localfilesystem / embedded notes in BC file don't need authenticating
                    username: '',
                    password: ''
                    // If no username or password require one at run time
                }
            ],
            // Data parsing done by pure subroutines
            data: [
                {
                    id: 0,
                    book: 'ssh',
                    title: 'Quick and easy commands',
                    summary: 'Summary of notebook\n$ssh -i <cert here...>',
                    fullNote: '',
                    dateCreated: new date(),
                    dateModified: new date(),
                    tags: [],
                    shared: 'username',
                    favourted: true,
                    trashed: false,
                    active: false
                }
            ],
            tagData: [
                {
                    id: 0,
                    name: 'Tag name',
                    color: '#HEXHEX',
                    dateCreated: new date(),
                    dateModified: new date(),
                }
            ]
        }
    },
    computed: {
        favourtes() {
            return this.data.filter(note => { return note.favourted })
        },
        notebooks() {
            return this.data
        },
        notebook() {
            // Filter data here (purely functional)
            return this.data
        },
        tagged() {
            return this.data.filter(note => { return note.tags.length > 0 })
        },
        shared() {
            return this.data.filter(note => { return note.shared })
        }
    },
    methods: {
        focusOnNote() {

        },
        save() {

        }
    },
    beforeRouteUpdate() {
        this.save()
    }
}
</script>