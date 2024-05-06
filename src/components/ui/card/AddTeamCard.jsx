const AddTeamCard = () => {
  return (
    <div className="bg-dark-blue-50 flex flex-col items-center  max-w-full p-8">
      <div className="">
        <img
          className="max-w-full w-28 rounded-full border border-dashed"
          src="https://i.ibb.co/GTsRfnn/Screenshot-2024-05-06-150430.png"
          alt=""
        />
      </div>
      <h1 className="text-lg font-bold mt-5">Invite New Chef</h1>

      <p className="text-center my-2">
        Invite to your organizations your Member by Email
      </p>
      <div className=" mt-2">
        <button className="bg-primary px-8 p-2 rounded-full font-bold">
          Invite New Chef
        </button>
      </div>
    </div>
  );
};

export default AddTeamCard;
