import { redirect } from 'next/navigation';

async function NotFound() {
  redirect("/404");
  return (<></>);
};


export default NotFound;
