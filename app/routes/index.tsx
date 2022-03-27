import { GenieStripe } from '~/components/GenieStripe';
import Vote from '~/components/Vote';

export default function Index() {
  return (
        <div>
          <GenieStripe className="background"></GenieStripe>
          <Vote></Vote>
        </div>
  );
}
