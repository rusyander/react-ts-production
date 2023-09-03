import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardOld } from '@/shared/ui/Card/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Texts as TextsOld } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating/ui/StarRating';
import { Input as InputOld } from '@/shared/ui/Input/ui/Input';
import { Button as ButtonOld } from '@/shared/ui/Button/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer as DrawerOld } from '@/shared/ui/Drawer/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { ToggleFeatures } from '@/shared/lib/features';
import { Texts } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCansel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        feedbackTitle,
        hasFeedback,
        title,
        onCansel = () => null,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [starCount, setStarCount] = useState(rate);
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
        [hasFeedback, openModal, onAccept],
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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack max gap="32">
                    <Texts title={feedbackTitle} />
                    <Input
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid={'RatingCard.Input'}
                    />
                    <HStack max gap="16" justify="end">
                        <Button
                            variant="outline"
                            onClick={canselHendler}
                            data-testid={'RatingCard.Close'}
                        >
                            {t('Отмена')}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={acceptHendler}
                            data-testid={'RatingCard.Send'}
                        >
                            {t('Отправить')}
                        </Button>
                    </HStack>
                </VStack>
            }
            off={
                <VStack max gap="32">
                    <TextsOld title={feedbackTitle} />
                    <InputOld
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid={'RatingCard.Input'}
                    />
                    <HStack max gap="16" justify="end">
                        <ButtonOld
                            theme="outline_red"
                            onClick={canselHendler}
                            data-testid={'RatingCard.Close'}
                        >
                            {t('Отмена')}
                        </ButtonOld>
                        <ButtonOld
                            theme="outline"
                            onClick={acceptHendler}
                            data-testid={'RatingCard.Send'}
                        >
                            {t('Отправить')}
                        </ButtonOld>
                    </HStack>
                </VStack>
            }
        />
    );
    const contentCard = (
        <VStack align="center" max gap="8">
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <>
                        <Texts
                            title={starCount ? t('Спасибо за оценку') : title}
                        />
                        <StarRating
                            selectedStarts={starCount}
                            size={40}
                            onSelect={onSelectStart}
                        />
                        <BrowserView>
                            <Modal isOpen={isOpen} onClose={closeModal} lazy>
                                {modalContent}
                            </Modal>
                        </BrowserView>
                        <MobileView>
                            <DrawerOld
                                isOpen={isOpen}
                                onClose={closeModal}
                                lazy
                            >
                                {modalContent}
                            </DrawerOld>
                        </MobileView>
                    </>
                }
                off={
                    <>
                        <TextsOld
                            title={starCount ? t('Спасибо за оценку') : title}
                        />
                        <StarRating
                            selectedStarts={starCount}
                            size={40}
                            onSelect={onSelectStart}
                        />
                        <BrowserView>
                            <Modal isOpen={isOpen} onClose={closeModal} lazy>
                                {modalContent}
                            </Modal>
                        </BrowserView>
                        <MobileView>
                            <DrawerOld
                                isOpen={isOpen}
                                onClose={closeModal}
                                lazy
                            >
                                {modalContent}
                            </DrawerOld>
                        </MobileView>
                    </>
                }
            />
        </VStack>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    max
                    className={classNames(cls.ratingCard, {}, [className])}
                    data-testid={'RatingCard'}
                    padding="24"
                    border="round"
                >
                    {contentCard}
                </Card>
            }
            off={
                <CardOld
                    max
                    className={classNames(cls.ratingCard, {}, [className])}
                    data-testid={'RatingCard'}
                >
                    {contentCard}
                </CardOld>
            }
        />
    );
});
