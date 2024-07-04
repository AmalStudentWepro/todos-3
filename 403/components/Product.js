export function Product(item, array) {
    const product = document.createElement('div')
    const name_prod = document.createElement('h2')
    const time_prod = document.createElement('h3')
    const delete_btn = document.createElement('button')
    const edit_btn = document.createElement('button')
    const img_delete = document.createElement('img')
    const img_edit = document.createElement('img')

    product.classList.add('product')
    name_prod.classList.add('name_prod')
    time_prod.classList.add('time_prod')
    delete_btn.classList.add('delete_btn')
    edit_btn.classList.add('edit_btn')

    img_delete.src = './svg/delete.svg'
    img_edit.src = './svg/edit.png' 

    name_prod.innerHTML = item.title
    time_prod.innerHTML = item.time

    if (item.isDone) {
        name_prod.style.textDecoration = "line-through"
    } else {
        name_prod.style.textDecoration = "none"
    }

    name_prod.onclick = () => {
        item.isDone = !item.isDone
        if (item.isDone) {
            name_prod.style.textDecoration = "line-through"
        } else {
            name_prod.style.textDecoration = "none"
        }
        console.log(array)
    }

    edit_btn.onclick = () => {
        openModal(item, name_prod)
    }

    product.append(name_prod, time_prod, delete_btn, edit_btn)
    delete_btn.append(img_delete)
    edit_btn.append(img_edit)

    delete_btn.onclick = () => {
        let idx = array.indexOf(item)
        array.splice(idx, 1)
        product.remove()
    }

    return product
}

function openModal(item, nameElement) {
    const modal = document.getElementById('modal')
    const modalTitle = document.getElementById('modal-title')
    modalTitle.value = item.title
    modal.style.display = 'block'

    const saveButton = document.querySelector('.save-btn')
    saveButton.onclick = () => {
        item.title = modalTitle.value
        nameElement.innerHTML = modalTitle.value
        modal.style.display = 'none'
    }

    const closeButton = document.getElementById('close-btn')
    closeButton.onclick = () => {
        modal.style.display = 'none'
    }
}
