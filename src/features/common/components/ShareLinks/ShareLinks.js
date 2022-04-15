import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
} from 'react-share';

import { ReactComponent as WhatsappIcon } from 'assets/whatsapp_icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/facebook_icon.svg';
import { ReactComponent as TelegramIcon } from 'assets/telegram_icon.svg';
import { ReactComponent as TwitterIcon } from 'assets/twitter_icon.svg';
import { ReactComponent as RedditIcon } from 'assets/reddit_icon.svg';
import { ReactComponent as EmailIcon } from 'assets/email_icon.svg';
import ShareButton from './ShareButton';

const ShareLinks = ({ user, object }) => {
  const currentURL = window.location.href;
  const { id } = useParams();

  const descriptionPetition = `${user} está necesitando '${object}' y quizás tu puedas ayudar! Ingresa a hoydonamos.uy o al siguiente link para obtener más información.`;
  const descriptionDonation = `Están donando '${object}' y quizás tú lo estés necesitando. Ingresa a hoydonamos.uy o al siguiente link para obtener más información.`;

  const description = id ? descriptionDonation : descriptionPetition;

  return (
    <div className="flex mt-2">
      <ShareButton type="whatsapp">
        <WhatsappShareButton title={description} url={currentURL}>
          <WhatsappIcon />
        </WhatsappShareButton>
      </ShareButton>
      <ShareButton type="telegram">
        <TelegramShareButton title={description} url={currentURL}>
          <TelegramIcon />
        </TelegramShareButton>
      </ShareButton>
      <ShareButton type="twitter">
        <TwitterShareButton title={description} url={currentURL}>
          <TwitterIcon />
        </TwitterShareButton>
      </ShareButton>
      <ShareButton type="reddit">
        <RedditShareButton
          title={description}
          url={currentURL}
          windowWidth={660}
          windowHeight={460}
        >
          <RedditIcon />
        </RedditShareButton>
      </ShareButton>
      <ShareButton type="email">
        <EmailShareButton
          url={currentURL}
          subject="Mira esto"
          body={description}
        >
          <EmailIcon />
        </EmailShareButton>
      </ShareButton>
      <ShareButton type="facebook">
        <FacebookShareButton
          url={currentURL}
          quote={description}
          hashtag="#hoydonamos"
        >
          <FacebookIcon />
        </FacebookShareButton>
      </ShareButton>
    </div>
  );
};

ShareLinks.propTypes = {
  user: PropTypes.string,
  object: PropTypes.string.isRequired,
};

ShareLinks.defaultProps = {
  user: 'Un usuario',
};

export { ShareLinks };
