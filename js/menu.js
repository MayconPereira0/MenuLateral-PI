//Deixar item-menu selecionado
// var menuitem = document.querySelectorAll('.item-menu')

// function selectLink(){
//     menuitem.forEach((item)=>
//         item.classList.remove('ativo')
//     )
//     this.classList.add('ativo')
// }

// menuitem.forEach((item)=>
//     item.addEventListener('click', selectLink)
// )

// Expandir o menu

// //Principal
// var btnExp = document.querySelector('#icon-seta')
// var menuSide = document.querySelector('.menu-lateral')

// btnExp.addEventListener('click', function(){
//     menuSide.classList.toggle('expandir')
// })
// //Container 1
// var btnExp2 = document.querySelector('#icon-seta')
// var menuSide2 = document.querySelector('.container-itens-menu')

// btnExp2.addEventListener('click', function(){
//     menuSide2.classList.toggle('expandir')
// });
// //Container 2
// var btnExp3 = document.querySelector('#icon-seta')
// var menuSide3 = document.querySelector('.container-itens-menu2')

// btnExp3.addEventListener('click', function(){
//     menuSide3.classList.toggle('expandir')
// });

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".item-menu .txt-link");

    menuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // Previne o redirecionamento do link

            const parentItem = item.closest(".item-menu");
            const subMenu = parentItem.querySelector(".sub-menu");
            const dropdownIcon = parentItem.querySelector(".dropdown");

            // Fecha outros submenus abertos
            document.querySelectorAll(".sub-menu").forEach((menu) => {
                if (menu !== subMenu) {
                    menu.classList.remove("active");
                }
            });

            // Alterna o submenu atual
            if (subMenu) {
                const isActive = subMenu.classList.toggle("active");

                // Atualiza a rotação do ícone
                if (dropdownIcon) {
                    dropdownIcon.style.transform = isActive
                        ? "rotate(270deg)"
                        : "rotate(90deg)";
                }
            }
        });
    });
});


