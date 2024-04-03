import methodGet from "crud.js";

async function showRecipes(){
    const response = await methodGet();
    const el = document.querySelector("template").content;
    const parent = document.querySelector(".recipes");
    parent.innerHTML = "";
    const clone = el.cloneNode(true);
    response.forEach(rec=>{
        clone.querySelector("[data-name]").textContent = rec.name;
        clone.querySelector("[data-origin]").textContent = rec.origin;
        if(rec.studentFriendly){
            clone.querySelector(".status").hidden = false;

        } else {
            clone.querySelector(".status").hidden = true;
        }
        clone.querySelectorAll("[data-id").forEach((e) => (e.dataset.id = rec.id));
        clone.querySelector("button{data-action='delete'").addEventListener("click", async ()=>{
           await methodDelete(rec.id);
           await showRecipes();
        })
        clone.querySelector("button{data-action='update'").addEventListener("click", async ()=>{
           await methodPatch(rec.id, !rec.studentFriendly);
           await showRecipes();
        })
        parent.appendChild(clone);
    })
}

function handleSubmit(){
    const form = document.querySelector("form");
    form.addEventListener("submit", async e=>{
        console.log(e);
        // stop refresh
        e.preventDefault();
        const formData = new FormData(form);
        console.log(formData.get("ingredients").split("\n"));

        await createRecipe({
            name: formData.get("name"),
            ingredients: formData.get("ingredients").split("\n"),
            allergens: formData.get("allergens").split("\n")
            // ---
        })

        showRecipes();
    })
};
handleSubmit();