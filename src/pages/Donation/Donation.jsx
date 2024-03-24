import useLocalStorage from "../../Hooks/useLocalStorage";
import DonationCard from "../../components/DonationCard/DonationCard";

const Donation = () => {
  const { donations } = useLocalStorage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto max-w-7xl mt-16 px-10 lg:px-5">
      {donations.map((donation) => (
        <DonationCard donation={donation} key={donation.id} />
      ))}
    </div>
  );
};

export default Donation;
