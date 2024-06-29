export function recipeTemplate(recipe) {
    return `
        <div class="recipe">
            <img class="recipeimg" src="${recipe.image}" alt="${recipe.name}">
            <div>
                <div class="tags">
                    ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h3 class="recipename">${recipe.name}</h3>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${[...Array(5)].map((_, i) => i < recipe.rating ? '<span aria-hidden="true" class="icon-star">⭐</span>' : '<span aria-hidden="true" class="icon-star-empty">☆</span>').join('')}
                </span>
                <p class="description">${recipe.description}</p>
            </div>
        </div>`;
}
