import { useState } from "react";

export function useServicesHero(cards = []) {
  //The state has a default value of "all" 
  const [filter, setFilter] = useState("all");

  const filteredCards = cards.filter((card) => {
    //if no filter is selected, show all cards
    if (filter === "all") return true;
    //otherwise, only show cards that match the selected filter
    return card.field.toLowerCase() === filter;
  });
// return the filter state, the function to update it, and the filtered list of cards
  return { filter, setFilter, filteredCards };
}