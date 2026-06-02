import { serve } from "inngest/next";
import { inngest , syncUserCreation,syncUserUpdation,syncUserDeletion} from "../../../../config/inngest";

//create an API that servers zero function
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});