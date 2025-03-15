import { Card } from "@/component";
import { Center, Flex, Grid, Image, Stack, Text } from "@mantine/core";

export const AboutPage = () => {
  return (
    <Center>
      <Card id="about" title={"About Me"}>
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
            <Stack>
              <Text>
                Front-End Developer with four years of experience and seven
                years in software development, specializing in React.js,
                Next.js, TypeScript, and Mantine UI. Previously a Junior
                Programmer for three years, handling full-stack tasks with Magic
                XPA, Vue.js, Node.js, and MySQL. Skilled in building performant
                UIs, scalable apps, and CI/CD pipelines. Experienced in
                deploying with AWS S3, CloudFront, and Bitbucket CI/CD.
              </Text>
              <Text>
                I hold a Bachelor of Science in Computer Engineering from AMA
                Computer College, completed in July 2018, which provided the
                technical foundation for my development career.
              </Text>
              <Text>
                Outside of work, I enjoy playing competitive games like Dota 2.
                These games have not only honed my problem-solving and critical
                thinking skills but also helped me improve my typing
                speed—boosting both my coding efficiency and focus.
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={2} m="auto">
            <Flex justify={"center"}>
              <Image
                className="hover-effect"
                src="/default/ck-profile.png"
                alt="charleslabit"
                w={370}
                h={"auto"}
              />
            </Flex>
          </Grid.Col>
        </Grid>
      </Card>
    </Center>
  );
};
