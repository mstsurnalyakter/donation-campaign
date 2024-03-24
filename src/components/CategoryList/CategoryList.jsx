
import useDonationData from '../../Hooks/useDonationData';
import CardDefault from '../Card/CardDefault';

const CategoryList = () => {
    const { data, loading } = useDonationData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mx-auto max-w-7xl mt-16">
      {data.map((item) => (
        <CardDefault key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CategoryList