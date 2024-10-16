async function sleep(ms = 250) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function postNewsletterEmail({ email }: { email: string }) {
  await sleep();
  return {
    success: true,
    email,
  };
}

export async function postNewUserCreation({
  username,
  password,
  email,
}: {
  username?: string;
  password?: string;
  email?: string;
}) {
  await sleep();

  if (!username || !password || !email) {
    return {
      success: false,
    };
  }

  return {
    success: true,
    username,
    password,
    email,
  };
}
