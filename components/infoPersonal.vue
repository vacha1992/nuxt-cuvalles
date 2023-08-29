<template>
    <v-card>
        <v-card-title>
            {{ nameWithCaption }}
        </v-card-title>

        <v-card-text>
            {{ ageWithCaption }}
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
export default ({
    name: "infoPersonal",

    //props = propiedades
    props: {
        name: {
            type: String,
            required: false,
            default: "Chava", //Si no tiene ningun valor la variable, se asigna por default lo que se requiera
        },

        age: {
            type: Number,
            required: false,
            default: 70,
        }
    },

    computed: {
        nameWithCaption(){
            return this.$t('name_caption') + this.name
        },

        ageWithCaption(){
            return this.$t('age_caption') + this.age
        }
    },

})
</script>

<i18n lang="json">
{
    "es": {
        "name_caption": "Nombre: ",
        "age_caption": "Edad: "
    },
    "en": {
        "name_caption": "Name: ",
        "age_caption": "Age: "
    }
}
</i18n>