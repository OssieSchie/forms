import {methodGet, methodDelete, methodPatch, methodSubmit} from "./crud.js";

showRecipes()

async function showRecipes(){
    const response = await methodGet();
    const el = document.querySelector("template").content;
    const parent = document.querySelector(".recipes");
    parent.innerHTML = "";
    response.forEach(rec=>{
        const clone = el.cloneNode(true);
        clone.querySelector("[data-name]").textContent = rec.name;
        clone.querySelector("[data-origin]").textContent = rec.origin;
        clone.querySelector("[data-diet]").textContent = rec.diet;
        clone.querySelector("[data-servings]").textContent = rec.servings;
        if(rec.studentFriendly){
            clone.querySelector(".status").hidden = false;

        } else {
            clone.querySelector(".status").hidden = true;
        }

        clone.querySelectorAll("[data-id").forEach((e) => (e.dataset.id = rec.id));
        clone.querySelector("button[data-action='delete']").addEventListener("click", async ()=>{
           await methodDelete(rec.id);
           console.log("deleted id = " + rec.id);
           await showRecipes();
        })
        clone.querySelector("button[data-action='update']").addEventListener("click", async ()=>{
           await methodPatch(rec.id, !rec.studentFriendly);
           console.log("updated id = " + rec.id);
           await showRecipes();
        })
        parent.appendChild(clone);
    })
}

function handleSubmit(){
    const form = document.querySelector("form");
    form.addEventListener("submit", async (e)=>{
        console.log(e);
        // vvv  stops refresh
        e.preventDefault();

        const formData = new FormData(form);
        console.log(formData.get("ingredients").split("\n"));

        await methodSubmit({
            name: formData.get("name"),
            description: formData.get("description"),
            ingredients: formData.get("ingredients").split("\n"),
            allergens: formData.get("allergens").split("\n"),
            servings: formData.get("servings"),
            diet: formData.get("diet"),
            studentFriendly: formData.get("studentFriendly"),
            origin: formData.get("origin"),
        })

        showRecipes();
    })
};
handleSubmit();