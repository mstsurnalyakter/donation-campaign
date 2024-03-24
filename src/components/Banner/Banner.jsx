import React from "react";

import { Button, Input, Typography } from "@material-tailwind/react";

const Banner = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="h-[450px] relative flex justify-center items-center flex-col">
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat opacity-30"></div>

      <Typography className="mb-4" variant="h2">
        I Grow By Helping People In Need
      </Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color="red"
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Banner;
