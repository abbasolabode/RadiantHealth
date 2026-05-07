import { useState } from "react";

export function useServicesHero(cards = []) {
  const [filter, setFilter] = useState("");

  const filteredCards = cards.filter((card) => {
    //if no filter is selected, show all cards
    if (filter === "all") return true;
    //otherwise, only show cards that match the selected filter
    return card.field.toLowerCase() === filter;
  });
// return the filter state, the function to update it, and the filtered list of cards
  return { filter, setFilter, filteredCards };
}