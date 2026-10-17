
const guideName = "Pasay Coffee Corners";
const currentYear = new Date().getFullYear();

let runningCount = 0;

const coffeeCards = document.querySelectorAll(".coffee-card");
const ratings = [];

coffeeCards.forEach(card => {
    runningCount++;

    const rating = Number(card.dataset.rating);

    if (
        card.dataset.rating !== "" &&
        Number.isFinite(rating) &&
        rating >= 0 &&
        rating <= 5
    ) {
        ratings.push(rating);
    }
});

const guideNameElement = document.getElementById("guide-name");
const guideDisplay = document.getElementById("guide-display");

if (guideNameElement) {
    guideNameElement.textContent = guideName;
}

if (guideDisplay) {
    guideDisplay.textContent = guideName;
}

// Display the calculated number of places
const placeCount = document.getElementById("place-count");

if (placeCount) {
    placeCount.textContent = runningCount;
}

const averageRating = ratings.length > 0
    ? ratings.reduce((total, rating) => total + rating, 0) / ratings.length
    : 0;

const averageRatingElement = document.getElementById("average-rating");

if (averageRatingElement) {
    averageRatingElement.textContent = averageRating.toFixed(1);
}

const copyright = document.getElementById("copyright");

if (copyright) {
    copyright.textContent =
        `© ${currentYear} ${guideName}. One cup, one corner, one story at a time.`;
}

// Three labelled console messages
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Total Coffee Picks:", runningCount);

const placeRating = coffeeCards.length > 0
    ? Number(coffeeCards[0].dataset.rating)
    : 0;

let ratingLabel;

if (placeRating >= 4) {
    ratingLabel = "Highly recommended";
} else if (placeRating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

const ratingResult = document.getElementById("rating-result");

if (ratingResult) {
    ratingResult.textContent =
        `${placeRating.toFixed(1)}/5: ${ratingLabel}`;
}

console.log("Place Rating:", placeRating);
console.log("Rating Recommendation:", ratingLabel);

const priceLevel = 2;
const isPlaceOpen = true;

const goodOption = priceLevel <= 2 && isPlaceOpen;

const budgetMessage = goodOption
    ? "Good option right now"
    : "Maybe another time";

const budgetResult = document.getElementById("budget-result");

if (budgetResult) {
    budgetResult.textContent = budgetMessage;
}

console.log("Budget Check:", goodOption);
console.log("Budget Recommendation:", budgetMessage);

const withinWalkingDistance = false;

const distanceMessage = withinWalkingDistance
    ? "Walking distance"
    : "Better to commute";

const distanceResult = document.getElementById("distance-result");

if (distanceResult) {
    distanceResult.textContent = distanceMessage;
}

console.log("Walking Distance:", withinWalkingDistance);
console.log("Distance Recommendation:", distanceMessage);


document.querySelectorAll(".sidebar-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const links = document.getElementById(
                button.getAttribute("aria-controls")
            );

            const isExpanded = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", !isExpanded);
            links.hidden = isExpanded;

            button.querySelector(".arrow").textContent =
                isExpanded ? "+" : "−";
        });
    });