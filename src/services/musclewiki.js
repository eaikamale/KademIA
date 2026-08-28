// Serviço de integração com a API do MuscleWiki para exibição de vídeos de pessoas reais em HD

const MUSCLEWIKI_API_KEY = import.meta.env.VITE_MUSCLEWIKI_API_KEY || "";

const videoCache = new Map();

/**
 * Busca a URL do vídeo de demonstração em alta definição de pessoas reais do MuscleWiki
 * @param {string} exerciseName Nome do exercício
 * @returns {Promise<string|null>} URL do vídeo MP4 ou null
 */
export async function getMuscleWikiVideoUrl(exerciseName) {
  if (!MUSCLEWIKI_API_KEY || !exerciseName) return null;
  
  if (videoCache.has(exerciseName)) {
    return videoCache.get(exerciseName);
  }

  try {
    const response = await fetch(
      `https://api.musclewiki.com/exercises?search=${encodeURIComponent(exerciseName)}`,
      {
        headers: {
          "X-API-Key": MUSCLEWIKI_API_KEY,
          "Accept": "application/json"
        }
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    const results = data.results || data;

    if (Array.isArray(results) && results.length > 0) {
      const match = results[0];
      const videoUrl = match.video_url || match.video || (match.videos && match.videos[0]?.url) || null;
      if (videoUrl) {
        videoCache.set(exerciseName, videoUrl);
        return videoUrl;
      }
    }
  } catch (error) {
    console.warn("MuscleWiki API indisponível ou sem chave:", error);
  }

  return null;
}
