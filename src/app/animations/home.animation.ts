import {
  query,
  stagger,
  transition,
  animate,
  keyframes,
  style,
  trigger,
} from '@angular/animations';

export const HomeAnimations = [
  //@heartDrop start
  trigger('heartDrop', [
    transition('* => *', [
      query(
        '.heart-drop',
        style({ opacity: 0, transform: 'translateY(-20vh)' })
      ),
      query(
        '.heart-drop',
        stagger('50ms', [
          animate(
            '800ms ease-out',
            style({ opacity: 0.3, transform: 'translateX(0)' })
          ),
        ])
      ),
    ]),
  ]),
  trigger('contentDisplay', [
    transition('* => *', [
      query('.content-display', style({ opacity: 0 })),
      query(
        '.content-display',
        stagger('500ms', [animate('800ms ease-out', style({ opacity: 1 }))])
      ),
    ]),
  ]),
  //@heartDrop end
  //@illAnim start new
  trigger('staggerOptions', [
    transition('* => *', [
      query('.option', style({ opacity: 0, transform: 'translateX(-75px)' })),
      query(
        '.option',
        stagger('.5s', [
          animate(
            '.5s .25s ease-in',
            style({ opacity: 1, transform: 'translateX(0)' })
          ),
        ])
      ),
    ]),
  ]),
];
