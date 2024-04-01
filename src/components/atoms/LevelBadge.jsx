import React from "react";

export const LevelBadge = ({ level }) => {
    const levels = [
        'bg-green-900 text-green-300',
        'bg-yellow-900 text-yellow-300',
        'bg-pink-900 text-pink-300',
        'bg-red-900 text-red-300',
        'bg-gray-700 text-gray-300',
    ]

    const labels = [
        'Débutant',
        'Facile',
        'Moyen',
        'Intermédiaire',
        'Compliqué'
    ]

    return (
        <span class={`text-sm font-medium me-2 px-2.5 py-0.5 rounded ${levels[level - 1]}`}>{labels[level - 1]}</span>
    );
};

export default LevelBadge
