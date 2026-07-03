import clownfish from "../assets/images/clownfish.jpg";
import butterflyfish from "../assets/images/butterflyfish.jpg";
import blueTang from "../assets/images/bluetang.jpg";
import shark from "../assets/images/shark.jpg";
import lionfish from "../assets/images/lionfish.jpg";
import betta from "../assets/images/betta.jpg";
import emperorfish from "../assets/images/emperor-angelfish.jpg";
import discus from "../assets/images/discus.jpg";

const fish =[
{
  id: 1,
  name: "Clownfish",
  genus: "Amphiprion",
  habitat: "Coral Reef",
  diet: "Omnivore",
  size: "Up to 11 cm (4.3 inches)",
  image: clownfish,
  description:"Clownfish are small, brightly coloured reef fish with an oval to streamlined body and a rounded head. They are typically bright orange with three white bands outlined in black. The area between their snout and eyes is smooth and lacks scales.",
  funFact: "Clownfish live in a mutually beneficial partnership with sea anemones. The anemone provides shelter and protection, while the clownfish defend, clean, and nourish the anemone."
},
{
  id: 2,
  name: "Butterflyfish",
  genus: "Chaetodon",
  habitat: "Coral reefs in tropical oceans",
  diet: "Corals, small invertebrates, algae, and plankton",
  size: "Up to 23 cm (9 inches)",
  image: butterflyfish,
  description: "Butterflyfish are brightly coloured reef fish with a thin, disk-shaped body and a pointed snout. Many species have bold patterns of yellow, white, black, and orange, often with a dark eye stripe that helps confuse predators.",
  funFact:"Young butterflyfish are covered with thin bony plates that protect them from predators. As they mature into adults, these protective plates disappear."
},
{
  id: 3,
  name: "Blue Tang",
  genus: "Paracanthurus",
  habitat: "Coral reefs in the Indo-Pacific",
  diet: "Juveniles feed mainly on plankton, while adults are omnivores that eat zooplankton and filamentous algae.",
  size: "Up to 15 cm (5.9 inches)" ,
  image: blueTang,
  description: "Blue tangs have a compressed, oval-shaped body with a pointed snout. They are easily recognized by their royal blue body, bright yellow tail, and distinctive black 'palette' pattern along the body.",
  funFact: "The brilliant blue colour of a blue tang becomes slightly lighter at night due to changes in pigmentation caused by light levels and the hormone melatonin."
},
{
id: 4,
  name: "Lionfish",
  genus: "Pterois",
  habitat: "Coral reefs, lagoons, rocky seabeds, and coastal waters of the Indian and western Pacific Oceans.",
  diet: "Small fish, invertebrates, and mollusks.",
  size: "Up to 45 cm (18 inches)",
  image: lionfish,
  description: "Lionfish are striking marine fish with red, white, and black stripes. Their long, flowing fins are tipped with venomous spines that help protect them from predators.",
  funFact: "Despite their venomous spines, lionfish are safe to eat when prepared correctly."
},
{
id: 5,
  name: "The Great White Shark",
  genus: "Carcharodon",
  habitat: "Tropical and temperate oceans worldwide, found near coastlines and in the open ocean.",
  diet: "Fish, squid, marine mammals, seabirds, and sea turtles.",
  size: "Typically 4.6-4.9 m (15-16 ft)",
  image: shark,
  description: "Great white sharks have a powerful, streamlined body with a grey back and white underside. They have around 300 sharp, serrated teeth that are replaced throughout their lives.",
  funFact: "A great white shark's huge, fatty liver helps it float and can make up more than 25% of its body weight."
},
{
  id: 6,
  name: "Siamese fighting fish",
  genus: "Betta",
  habitat: "Shallow freshwater habitats such as rice paddies, slow-moving streams, and ponds in Southeast Asia.",
  diet: " Carnivorous, feeding on zooplankton, small crustaceans, and the larvae of aquatic insects. ",
  size: "Typically 6-8 cm (2.4-3.1 inches)",
  image: betta,
  description: "The Betta, also known as the Siamese fighting fish, is a small freshwater fish admired for its vibrant colors and long, flowing fins. Bettas are intelligent, curious, and known for their bold territorial behavior, especially among males.",
  funFact: "Betta fish can rest on leaves or other objects above the water's surface while sleeping. Their special labyrinth organ allows them to breathe air directly, much like a lung."
},
{
  id: 7,
  name: "Emperor Angelfish",
  genus: "Pomacanthus",
  habitat: "Coral reefs in the Indo-Pacific",
  diet: "Sponges, soft-bodied marine animals, and other tiny organisms found on coral reefs.",
  size: "Up to 40 cm (16 inches)",
  image: emperorfish,
  description: "Emperor angelfish are striking marine fish with a laterally compressed body. Adults are striped with blue and yellow horizontal stripes, a light blue face with a dark blue mask over the eyes and a yellow caudal fin.They are often seen in pairs or small groups, swimming gracefully among the coral branches.",
  funFact: "These fish can make a knocking sound when they feel threatened. ",
},
{id: 8,
  name: "Discus Fish",
  genus: "Symphysodon",
  habitat: "Tropical freshwater environments in South America, particularly the Amazon basin.",
  diet: "Omnivorous, feeding on insects, crustaceans, and plant matter.",
  size: "Up to 15 cm (6 inches)",
  image: discus,
  description: " Discus fish are known for their flat, laterally compressed body. It is this body shape from which their common name, 'discus', is derived. The sides of the fish are frequently patterned in shades of green, red, brown, and blue.Discus are kept by fishkeepers in the home aquarium, where they are valued for their striking appearance.",
  funFact: "Discus fish are highly intelligent and can recognize their owners. They are also known for their unique swimming style, often hovering in the water column."
}
]

export default fish;