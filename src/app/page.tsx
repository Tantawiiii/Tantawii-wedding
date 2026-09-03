"use client";

import { useState } from "react";
import EnvelopeGate from "@/components/EnvelopeGate";
import InvitationJourney from "@/components/InvitationJourney";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <EnvelopeGate onOpen={() => setOpened(true)} />}
      {opened && <InvitationJourney />}
    </>
  );
}
