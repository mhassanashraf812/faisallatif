export type ReviewType = "text" | "video" | "image";

export interface Review {
  id: string;
  type: ReviewType;
  name: string;
  rating: number;
  date: string;
  text?: string;
  avatar?: string;
  videoUrl?: string;
  previewImage?: string;
  imageUrl?: string;
  caption?: string;
}

export const reviews: Review[] = [
  {
    id: "v1",
    type: "video",
    name: "Facebook Review",
    rating: 5,
    date: "2026",
    videoUrl: "https://www.facebook.com/share/r/1GE8W8QxQX/",
    previewImage: "https://images.unsplash.com/photo-1578985545062-c437068358b2",
    caption: "Customer sharing their experience at Faisal Latif",
  },
  {
    id: "v2",
    type: "video",
    name: "Facebook Review",
    rating: 5,
    date: "2026",
    videoUrl:
      "https://www.facebook.com/story.php?story_fbid=pfbid0VaPHnW9Y2mGcKaHK1REx2cEqqWAkvrWCPKe4yDbatVuKPfMpPW8vWDexhQJAeNZwl&id=100064533502879",
    previewImage: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
    caption: "Happy customer review from Layyah",
  },
  {
    id: "v3",
    type: "video",
    name: "Facebook Review",
    rating: 5,
    date: "2026",
    videoUrl: "https://www.facebook.com/share/r/14k7Sa4KvxA/",
    previewImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    caption: "Taste that speaks for itself",
  },
  {
    id: "v4",
    type: "video",
    name: "Facebook Review",
    rating: 5,
    date: "2026",
    videoUrl: "https://www.facebook.com/share/r/1B5ZGm5Jqb/",
    previewImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    caption: "Real feedback from our valued customers",
  },
  {
    id: "v5",
    type: "video",
    name: "Facebook Review",
    rating: 5,
    date: "2026",
    videoUrl: "https://www.facebook.com/share/r/1D1Vzbt4ij/",
    previewImage: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    caption: "Why Layyah loves Faisal Latif",
  },
  {
    id: "v6",
    type: "video",
    name: "Facebook Review",
    rating: 5,
    date: "2026",
    videoUrl: "https://www.facebook.com/share/r/18sB9xzDn2/",
    previewImage: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
    caption: "Another happy customer story",
  },
  {
    id: "t1",
    type: "text",
    name: "Ayesha Khan",
    rating: 5,
    text: "Layyah ki sab se behtareen mithai! Gulab jamun bilkul perfect — naram, meetha aur taza. Har Eid pe yahi se order karte hain.",
    date: "April 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: "t2",
    type: "text",
    name: "Ahmed Raza",
    rating: 5,
    text: "Fateh Pur ka fakhar! Custom cake meri beti ki birthday pe order kiya — design aur taste dono zabardast thay.",
    date: "March 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    id: "t3",
    type: "text",
    name: "Fatima Noor",
    rating: 5,
    text: "Shaadi ka cake order kiya — waqt pe deliver, design elegant, aur mehmaan sab tarif kar rahe thay. Highly recommended!",
    date: "February 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    id: "i1",
    type: "image",
    name: "Customer Photo",
    rating: 5,
    date: "2026",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-c437068358b2",
    caption: "Beautiful custom cake delivered for a celebration",
  },
  {
    id: "i2",
    type: "image",
    name: "Customer Photo",
    rating: 5,
    date: "2026",
    imageUrl: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
    caption: "Fresh mithai platter — perfect for Eid",
  },
  {
    id: "i3",
    type: "image",
    name: "Customer Photo",
    rating: 5,
    date: "2026",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    caption: "Sundae treat enjoyed by the whole family",
  },
];

export const videoReviews = reviews.filter((r) => r.type === "video");
export const textReviews = reviews.filter((r) => r.type === "text");
export const imageReviews = reviews.filter((r) => r.type === "image");
