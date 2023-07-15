import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Texts } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCansel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    feedbackTitle,
    hasFeedback,
    title,
    onCansel = () => null,
    onAccept,
  } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onSelectStart = useCallback(
    (selectedStartCount: number) => {
      setStarCount(selectedStartCount);
      if (hasFeedback) {
        openModal();
      } else {
        onAccept?.(selectedStartCount);
      }
    },
    [hasFeedback, openModal, onAccept]
  );

  const acceptHendler = useCallback(() => {
    closeModal();
    onAccept?.(starCount, feedback);
  }, [closeModal, feedback, onAccept, starCount]);

  const canselHendler = useCallback(() => {
    closeModal();
    onCansel?.(starCount);
  }, [closeModal, onCansel, starCount]);

  const modalContent = (
    <VStack max gap="32">
      <Texts title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Ваш отзыв')}
      />
      <HStack max gap="16" justify="end">
        <Button theme="outline_red" onClick={canselHendler}>
          {t('Отмена')}
        </Button>
        <Button theme="outline" onClick={acceptHendler}>
          {t('Отправить')}
        </Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={classNames(cls.ratingCard, {}, [className])}>
      <VStack align="center" max gap="8">
        <Texts title={title} />
        <StarRating size={40} onSelect={onSelectStart} />
        <BrowserView>
          <Modal isOpen={isOpen} onClose={closeModal} lazy>
            {modalContent}
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isOpen} onClose={closeModal} lazy>
            {modalContent}
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  );
});
