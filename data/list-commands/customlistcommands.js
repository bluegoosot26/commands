const customItems = {
  Ales: {
    list: [
      "stout",
      "IPA",
      "Amber",
      "bogweed",
    ],
    label: "today's community ale is",
    template: (sender, chosen, joke) =>
      `${sender}, today's community ale is ${chosen}! ${joke}`,
  },

  customitem2: {
    list: [
      "item1",
      "item2",
    ],
    label: "today your customitem2 is",
    template: (sender, chosen, joke) =>
      `${sender}, today your customitem2 is ${chosen}! ${joke}`,
  },

  customitem3: {
    list: [
      "item1",
      "item2",
    ],
    label: "today your customitem3 is",
    template: (sender, chosen, joke) =>
      `${sender}, today your customitem3 is ${chosen}! ${joke}`,
  },
};

export default customItems;
