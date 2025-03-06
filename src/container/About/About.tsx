import { Card } from "@/component";
import { Center, Grid, Image, Text } from "@mantine/core";

export const AboutPage = () => {
  return (
    <Center>
      <Card id="about">
        <Grid
          columns={5}
          gutter={16}
          styles={{
            inner: {
              justifyContent: "center",
            },
          }}
        >
          <Grid.Col span={{ lg: 3, sm: 5, base: 5, xl: 3, md: 5 }}>
            <Text fz={25}>Hello, I'm</Text>
            <Text fw="bold" fz={30}>
              Charles Kenneth Labit
            </Text>
            <Text fz={25}>
              a Software Developer with 7 years of experience. I specialize in
              front-end development, with nearly four years of expertise in
              React.js, Next.js, TypeScript, Mantine UI, and GraphQL. Currently,
              I work as a Front-End Developer at Awesomelab, focusing on
              building responsive and user-friendly web applications. My
              previous experience as a Full-Stack Developer with Vue.js,
              Node.js, Express.js, and MySQL has given me a strong understanding
              of backend systems and API integrations, allowing me to create
              seamless, end-to-end solutions.
            </Text>
          </Grid.Col>
          <Grid.Col span={2} m="auto">
            <Image
              src="/default/ck-profile.png"
              alt="ck-profile"
              w={370}
              h={"auto"}
            />
          </Grid.Col>
        </Grid>
      </Card>
    </Center>
  );
};
