import { Card } from "@/component";
import { SimpleGrid } from "@mantine/core";
import { ChatApp } from "./ChatApp";
import { CKMart } from "./CKMart";
import { DoctorsNote } from "./DoctorsNote";
import { Nyetflix } from "./Nyetflix";

export const PersonalProject = () => {
  return (
    <Card>
      <SimpleGrid cols={{ lg: 2, md: 1 }} spacing={50}>
        <CKMart />
        <ChatApp />
        <Nyetflix />
        <DoctorsNote />
      </SimpleGrid>
    </Card>
  );
};
