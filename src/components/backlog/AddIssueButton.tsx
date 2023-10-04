import React, { useState } from "react";
import UpsertIssueModal from "./UpsertIssueModal";
import { useSession } from "next-auth/react";
import { AiOutlinePlus } from "react-icons/ai";
import type { User } from "@prisma/client";

export default function AddIssueButton({ backlog, teamUsers }: { backlog: string, teamUsers:User[] }) {
  const [showAddIssueModal, setShowAddIssueModal] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      {showAddIssueModal && (
        <UpsertIssueModal
          onClose={() => setShowAddIssueModal(false)}
          backlog={backlog}
          teamId={session?.user.teamId}
          teamUsers={teamUsers}
        />
      )}

      <button
        className="rounded-full bg-gray-800 p-2.5 shadow-lg"
        data-testid="addSprintIssueButton"
        onClick={() => setShowAddIssueModal(true)}
      >
        <AiOutlinePlus size="1em" color="white" />
      </button>
    </>
  );
}
