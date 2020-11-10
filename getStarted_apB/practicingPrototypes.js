// Finally, let's work on this and objects linked via prototype (Chapter 4, Pillar 2).

// Define a slot machine with three reels that can individually spin(), and then display() the current contents of all the reels.

// The basic behavior of a single reel is defined in the reel object below. But the slot machine needs individual reels—objects that delegate to reel, and which each have a position property.

// A reel only knows how to display() its current slot symbol, but a slot machine typically shows three symbols per reel: the current slot (position), one slot above (position - 1), and one slot below (position + 1). So displaying the slot machine should end up displaying a 3 x 3 grid of slot symbols.