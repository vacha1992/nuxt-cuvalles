<template>
    <v-container>
        <infoPersonal :name="nameData" :age="ageData"/>
    </v-container>
</template>

<script lang="ts">
export default ({
    name: "Personas",
    
    data: ()=>({
        nameData: "Salvador Curiel H.",
        ageData: 44
    }),
})
</script>

<i18n lang="json">
{
    "es": {},
    "en": {}
}
</i18n>