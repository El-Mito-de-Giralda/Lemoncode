import type { MembersEntity } from "~/types";
import { ref } from 'vue';
import { useRouter } from 'vue-router';



export const Memberservice2=  {
    async get(prop: string) {
        try {const members = await $fetch<MembersEntity>(`https://api.github.com/orgs/${prop}/members`)
return members
} catch {console.error("No se ha encontrado la organización que buscaba");
alert("No se ha encontrado la organización que buscaba. Por favor, vuelva a intentarlo.")}
},

async MemberDetail(prop: string) {
    let org = ref(prop);
    
    const members = await $fetch<MembersEntity>(`https://api.github.com/users/${prop}`)
return members
},


}