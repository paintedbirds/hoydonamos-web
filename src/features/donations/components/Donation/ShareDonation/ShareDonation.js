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

const ShareDonation = () => {
  const currentURL = window.location.href;
  const description =
    "Hola! hecha un vistazo de lo que estan donando en 'Che, ¿hoy donamos?'";

  return (
    <div className="flex mt-2">
      <ShareButton className="share-button__whatsapp">
        <WhatsappShareButton title={description} url={currentURL}>
          <WhatsappIcon />
        </WhatsappShareButton>
      </ShareButton>
      <ShareButton className="share-button__telegram">
        <TelegramShareButton title={description} url={currentURL}>
          <TelegramIcon />
        </TelegramShareButton>
      </ShareButton>
      <ShareButton className="share-button__twitter">
        <TwitterShareButton title={description} url={currentURL}>
          <TwitterIcon />
        </TwitterShareButton>
      </ShareButton>
      <ShareButton className="share-button__reddit">
        <RedditShareButton
          title={description}
          url={currentURL}
          windowWidth={660}
          windowHeight={460}
        >
          <RedditIcon />
        </RedditShareButton>
      </ShareButton>
      <ShareButton className="share-button__email">
        <EmailShareButton
          url={currentURL}
          subject="Mira esto"
          body={description}
        >
          <EmailIcon />
        </EmailShareButton>
      </ShareButton>
      <ShareButton className="share-button__facebook">
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

export default ShareDonation;
