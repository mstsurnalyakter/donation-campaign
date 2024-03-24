import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const DonationCard = ({ donation }) => {

  const {
    id,
    title,
    category,
    image,
    description,
    price,
    cardBg,
    textColor,
    categoryBg,
  } = donation || {};

  return (
    <Card
      style={{ backgroundColor: cardBg, color: textColor }}
      className="w-full max-w-[48rem] flex-row mx-auto"
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Button
          style={{ backgroundColor: categoryBg, color: textColor }}
          className="mb-4"
          size="sm"
        >
          {category}
        </Button>
        <Typography
          style={{ color: textColor }}
          variant="h5"
          color="blue-gray"
          className="mb-2"
        >
          {title}
        </Typography>
        <Typography
          style={{ color: textColor }}
          variant="h6"
          color="gray"
          className="mb-4 uppercase"
        >
          ${price}.00
        </Typography>
        <Button
          style={{ backgroundColor: textColor }}
          className="mt-6  text-white rounded-md capitalize text-xl"
          size="sm"
        >
          {/* Donate $ {price} */}
          View Details
        </Button>
      </CardBody>
    </Card>
  );
};

export default DonationCard;
