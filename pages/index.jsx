import TestClient from '@/components/TestClient'
import TestSSR from '@/components/TestSSR'
import { incrementByAmount } from '@/redux/counterSlice';
import { setPosts } from "@/redux/postSlice";
import { wrapper } from '@/redux/store';

const index = () => {
  return (
    <div>
      <TestClient />
      <TestSSR />
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async () => {
  await dispatch(incrementByAmount(5));
  await dispatch(setPosts([1, 2, 3, 4, 5]));
});

export default index