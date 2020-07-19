interface SearchApiResponse {
    docs: SongInfo[];
    totalDocs: number;
    lastPage: number;
    prevPage: number;
    nextpage: number;
}

interface SongInfo {
    metadata: {
        difficulties: {
            easy: boolean,
            normal: boolean,
            hard: boolean,
            expert: boolean,
            expertPlus: boolean
        },
        duration: number,
        automapper: null, // TODO find out type
        characteristics: [
        {
            name: string,
            difficulties: {
                easy: DifficultyInfo | null,
                normal: DifficultyInfo | null,
                hard: DifficultyInfo | null,
                expert: DifficultyInfo | null,
                expertPlus: DifficultyInfo | null
            }
        }
        ],
        songName: string;
        songSubName: string;
        songAuthorName: string;
        levelAuthorName: string;
        bpm: number
    };
    stats: {
        downloads: number,
        plays: number,
        downVotes: number,
        upVotes: number,
        heat: number,
        rating: number
    };
    description: string;
    deletedAt: Date | null; // TODO correct?
    _id: string;
    key: number; // TODO correct?
    name: string;
    uploader: {
        _id: string,
        username: string
    };
    uploaded: Date;
    hash: string;
    directDownload: URL;
    downloadURL: URL;
    coverURL: URL;
}


interface DifficultyInfo {
    duration: number;
    length: number;
    bombs: number;
    notes: number;
    obstacles: number;
    njs: number;
    njsOffset: number;
}