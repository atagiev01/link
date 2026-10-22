export interface WeddingMusicTrack {
  id: string;
  name: string;
  category: 'milli' | 'vals' | 'romantic' | 'acoustic' | 'custom';
  description: string;
  url: string;
  defaultTitle: string;
}

/**
 * YENİ MUSİQİ ƏLAVƏ ETMƏK:
 *  1) mp3 faylını public/ qovluğuna qoyun (fayl adında boşluq və xüsusi simvol olmasın, məs. public/toy-valsi.mp3).
 *  2) Aşağıya yeni sətir əlavə edin: url: '/toy-valsi.mp3'
 *  3) Yadda saxlayın, saytı yenidən yükləyin: musiqi redaktorda «Hazır musiqilər» siyahısında görünəcək.
 * Qeyd: eyni adlı faylı əvəz etmək əvəzinə yeni ad verin, əks halda brauzer köhnə musiqini keşdən oynada bilər.
 */
export const WEDDING_MUSIC_PRESETS: WeddingMusicTrack[] = [
  {
    id: 'ww-custom',
    name: 'Yeni musiqi (ww.mp3)',
    category: 'custom',
    description: 'public/ww.mp3 faylı',
    url: '/ww.mp3',
    defaultTitle: 'Toy Musiqisi',
  },
  {
    id: 'vagzali-traditional',
    name: 'Toy Valsı (Pachelbel - Canon in D)',
    category: 'vals',
    description: 'Bütün dünyada bəy və gəlinin ən sevimli klassik orkestr toy valsı',
    url: '/wedding-music.mp3',
    defaultTitle: 'Pachelbel - Toy Valsı (Orkestr)',
  },
  {
    id: 'mendelssohn-waltz',
    name: 'Mendelssohn & Pachelbel - Toy Valsı (Klassik)',
    category: 'vals',
    description: 'Zərif və təntənəli klassik orkestr valsı',
    url: '/wedding-music.mp3',
    defaultTitle: 'Klassik Toy Valsı',
  },
  {
    id: 'romantic-piano-strings',
    name: 'Romantik Melodiya & Skripka',
    category: 'romantic',
    description: 'Sakit, emosional və romantik toy fon musiqisi',
    url: '/wedding-music.mp3',
    defaultTitle: 'Romantik Sevgi Melodiyası',
  },
  {
    id: 'piano-reflections',
    name: 'Zərif Royal Melodiyası',
    category: 'romantic',
    description: 'Xəyalpərvər və sakitləşdirici toy fon musiqisi',
    url: '/wedding-music.mp3',
    defaultTitle: 'Zərif Royal Melodiyası',
  },
  {
    id: 'delicate-acoustic',
    name: 'Akustik Sevgi Melodiyası',
    category: 'acoustic',
    description: 'Müasir gənclər və minimalist toylar üçün zərif musiqi',
    url: '/wedding-music.mp3',
    defaultTitle: 'Akustik Sevgi Melodiyası',
  },
];
