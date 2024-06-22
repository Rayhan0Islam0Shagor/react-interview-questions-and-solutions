/* eslint-disable prettier/prettier */
'use client';
import { BOX_DATA } from './_components/constants';
import Shape from './_components/Shape';

const Page = () => {
  return (
    <section>
      <Shape data={BOX_DATA} />
    </section>
  );
};

export default Page;
