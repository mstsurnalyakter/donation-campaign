
import useDonationData from '../../Hooks/useDonationData';

const CategoryList = () => {
    const { data, loading } = useDonationData();
    console.log(data,loading);
  return (
    <div>

      {
        // data.map(item =>)
      }
    </div>
  );
}

export default CategoryList