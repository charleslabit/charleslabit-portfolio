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
                I’m a software developer with 7 years of experience, currently
                specializing as a Front-End Developer at Awesomelab, where I’ve
                been for the past 4 years. Before this, I spent 3 years as a
                Full Stack Developer, giving me a solid foundation in both
                front-end and back-end technologies. Although my primary focus
                is front-end development, my broad experience allows me to
                approach projects with a well-rounded perspective.
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
                alt="ck-profile"
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
