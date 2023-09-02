import React from 'react';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockCompenent } from '../ArticleImageBlockCompenent/ArticleImageBlockCompenent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

export const RenderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );

        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );

        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockCompenent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );

        default:
            return null;
    }
};
