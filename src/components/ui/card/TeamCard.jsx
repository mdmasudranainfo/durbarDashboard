import { Facebook, Linkedin, Twitter } from "lucide-react";

const TeamCard = () => {
  return (
    <div className="bg-dark-blue-50 flex flex-col items-center  max-w-full p-8">
      <div className="">
        <img
          className="max-w-full w-28 rounded-full"
          src="https://static01.nyt.com/images/2024/02/03/opinion/03grose-newsletter-image/03grose-newsletter-image-superJumbo.jpg"
          alt=""
        />
      </div>
      <h1 className="text-lg font-bold mt-5">Md Masud Rana </h1>
      <h2 className="">Head Chef</h2>
      <h3 className="text-sm my-2">
        <span className="text-primary font-bold">Special Dish: </span>{" "}
        <span>Chicken Burger</span>
      </h3>
      <div className="flex items-center gap-3">
        <Facebook className="cursor-pointer" />
        <Twitter className="cursor-pointer" />
        <Linkedin className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TeamCard;
