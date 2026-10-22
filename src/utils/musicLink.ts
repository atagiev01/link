/**
 * Musiqi linkinin yoxlanışı. Problem varsa Azərbaycanca mesaj qaytarır, yoxdursa null.
 * Qəbul edilir:
 *   - tam ünvan:        https://server.com/mahni.mp3
 *   - layihə daxilində: /ww.mp3   (fayl public/ qovluğunda olmalıdır)
 */
const AUDIO_EXT = /\.(mp3|m4a|aac|ogg|oga|wav|webm)(\?[^#]*)?(#.*)?$/i;

export function musicLinkProblem(raw: string): string | null {
  const url = (raw || '').trim();
  if (!url) return 'Musiqi linki boşdur.';
  if (/\s/.test(url)) return 'Linkdə boşluq ola bilməz. Fayl adında boşluq varsa onu tire (-) ilə əvəz edin.';
  const isAbsolute = /^https?:\/\//i.test(url);
  const isLocal = url.startsWith('/') && !url.startsWith('//');
  if (!isAbsolute && !isLocal) {
    return 'Link https:// ilə başlamalıdır; layihənin public qovluğundakı fayl üçün isə / ilə başlamalıdır (məs. /ww.mp3).';
  }
  if (!AUDIO_EXT.test(url)) {
    return 'Link birbaşa musiqi faylına işarə etməlidir (.mp3, .m4a, .ogg və ya .wav ilə bitməlidir). YouTube və ya Google Drive səhifə linkləri işləmir.';
  }
  return null;
}

/** audio.src həmişə tam ünvan qaytarır; müqayisə üçün nisbi linki də tam ünvana çevirir. */
export function resolveMusicUrl(url: string): string {
  try {
    return new URL(url, window.location.href).href;
  } catch {
    return url;
  }
}
