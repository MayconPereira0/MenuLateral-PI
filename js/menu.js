// Abrir subMenu

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


// Filtro de preço - barra

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".input-preco input"),
    progress = document.querySelector(".slider .progress");

let priceGap = 1000;

// Atualizar rangeInput ao modificar priceInput
priceInput.forEach((input, index) => {
    input.addEventListener("input", () => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        // Garantir o gap mínimo entre os valores
        if (maxPrice - minPrice >= priceGap && maxPrice <= 10000 && minPrice >= 0) {
            if (index === 0) {
                rangeInput[0].value = minPrice;
                progress.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                progress.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

// Atualizar priceInput ao modificar rangeInput
rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        // Garantir o gap mínimo entre os controles
        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


// Vereficar input

const searchInput = document.querySelector('.search-input');
const brandList = document.querySelectorAll('.lista-marcas label');

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    brandList.forEach(label => {
        const text = label.textContent.toLowerCase();
        if (text.includes(filter)) {
            label.style.display = 'flex'; // Mostrar a marca correspondente
        } else {
            label.style.display = 'none'; // Ocultar a marca não correspondente
        }
    });
});



