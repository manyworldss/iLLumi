// Mock Data
const expiringContracts = [
    { id: 'SP-8821', name: 'Sony Pictures Output', region: 'Global', daysLeft: 12, value: '$12.5M', status: 'Action Required' },
    { id: 'LG-4402', name: 'Lionsgate Library', region: 'North America', daysLeft: 18, value: '$4.2M', status: 'Urgent' },
    { id: 'PAR-1102', name: 'Paramount Classics', region: 'EMEA', daysLeft: 24, value: '$8.1M', status: 'Reviewing' },
    { id: 'A24-9910', name: 'A24 Indie Slate', region: 'Global', daysLeft: 29, value: '$15.0M', status: 'Negotiating' },
];

const negotiations = [
    { name: 'Paramount+', stage: 'Negotiating', progress: 75, date: 'Nov 15 - Dec 20' },
    { name: 'HBO Max Bundle', stage: 'Term Sheet', progress: 40, date: 'Dec 01 - Jan 15' },
    { name: 'Discovery Factual', stage: 'Long Form', progress: 90, date: 'Oct 20 - Dec 10' },
];

// State
let selectedContracts = new Set();

// DOM Elements
const modalContainer = document.getElementById('modal-container');

// Utilities
const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

// --- Action Items Modal (formerly Risk Radar) ---

function openActionModal() {
    const modalHtml = `
        <div class="fixed inset-0 bg-[#1C1C1C]/20 backdrop-blur-sm transition-opacity z-40" onclick="closeModal()"></div>
        <div class="fixed inset-0 z-50 w-screen overflow-y-auto pointer-events-none">
            <div class="flex min-h-full items-center justify-center p-4 text-center pointer-events-auto">
                <div class="relative transform overflow-hidden rounded bg-[#F9F8F6] border border-[#E5E5E5] text-left shadow-2xl transition-all sm:w-full sm:max-w-2xl">
                    <div class="px-8 py-6 border-b border-[#E5E5E5] flex justify-between items-center bg-white">
                        <div class="flex items-center gap-4">
                            <div class="h-10 w-10 rounded-full bg-[#FEF2F2] flex items-center justify-center border border-[#FEE2E2]">
                                <i data-lucide="alert-circle" class="h-5 w-5 text-[#B91C1C]"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-serif text-[#1C1C1C]">Immediate Actions</h3>
                                <p class="text-sm text-gray-500">Items requiring attention</p>
                            </div>
                        </div>
                        <button onclick="closeModal()" class="text-gray-400 hover:text-[#1C1C1C] transition-colors">
                            <i data-lucide="x" class="h-6 w-6"></i>
                        </button>
                    </div>
                    <div class="px-8 py-6">
                        <div class="space-y-3">
                            ${expiringContracts.map(contract => `
                                <div class="flex items-center justify-between p-4 rounded border border-[#E5E5E5] bg-white hover:border-gray-300 transition-colors group cursor-pointer">
                                    <div class="flex items-center gap-4">
                                        <div class="h-10 w-10 rounded bg-[#F2F0EB] flex items-center justify-center text-xs font-bold text-gray-500 border border-[#E5E5E5]">
                                            ${contract.id.split('-')[0]}
                                        </div>
                                        <div>
                                            <div class="text-base font-medium text-[#1C1C1C] group-hover:text-[#7E6C86] transition-colors">${contract.name}</div>
                                            <div class="text-xs text-gray-500">${contract.id} • ${contract.region}</div>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <div class="text-sm font-serif text-[#1C1C1C]">${contract.value}</div>
                                        <div class="text-xs text-[#B91C1C] font-medium">${contract.daysLeft} days left</div>
                                    </div>
                                    <button class="p-2 hover:bg-gray-50 rounded-full text-gray-400 hover:text-[#1C1C1C] transition-colors">
                                        <i data-lucide="arrow-right" class="h-4 w-4"></i>
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="bg-gray-50 px-8 py-4 flex justify-end gap-3 border-t border-[#E5E5E5]">
                        <button onclick="closeModal()" class="px-6 py-2 rounded text-sm font-medium text-gray-600 hover:text-[#1C1C1C] hover:bg-gray-100 transition-colors">Dismiss</button>
                        <button class="px-6 py-2 rounded text-sm font-medium bg-[#1C1C1C] text-white hover:bg-black transition-colors shadow-lg">Review All</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    modalContainer.innerHTML = modalHtml;
    lucide.createIcons();
}

// --- Negotiations Timeline Modal ---

function openNegotiationsModal() {
    const modalHtml = `
        <div class="fixed inset-0 bg-[#1C1C1C]/20 backdrop-blur-sm transition-opacity z-40" onclick="closeModal()"></div>
        <div class="fixed inset-0 z-50 w-screen overflow-y-auto pointer-events-none">
            <div class="flex min-h-full items-center justify-center p-4 text-center pointer-events-auto">
                <div class="relative transform overflow-hidden rounded bg-[#F9F8F6] border border-[#E5E5E5] text-left shadow-2xl transition-all sm:w-full sm:max-w-3xl">
                    <div class="px-8 py-6 border-b border-[#E5E5E5] flex justify-between items-center bg-white">
                        <div class="flex items-center gap-4">
                            <div class="h-10 w-10 rounded-full bg-[#F0FDF4] flex items-center justify-center border border-[#DCFCE7]">
                                <i data-lucide="activity" class="h-5 w-5 text-[#15803D]"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-serif text-[#1C1C1C]">Negotiation Pipeline</h3>
                                <p class="text-sm text-gray-500">Active deal timeline</p>
                            </div>
                        </div>
                        <button onclick="closeModal()" class="text-gray-400 hover:text-[#1C1C1C] transition-colors">
                            <i data-lucide="x" class="h-6 w-6"></i>
                        </button>
                    </div>
                    <div class="px-8 py-8">
                        <div class="relative space-y-8">
                            <!-- Timeline Header -->
                            <div class="flex justify-between text-xs text-gray-400 uppercase tracking-widest font-semibold mb-6 border-b border-[#E5E5E5] pb-2">
                                <span>Oct</span>
                                <span>Nov</span>
                                <span>Dec</span>
                                <span>Jan</span>
                            </div>

                            ${negotiations.map((deal, index) => `
                                <div class="relative">
                                    <div class="flex justify-between items-end mb-2">
                                        <div>
                                            <div class="text-sm font-medium text-[#1C1C1C]">${deal.name}</div>
                                            <div class="text-[10px] text-gray-500">${deal.stage} • ${deal.date}</div>
                                        </div>
                                        <div class="text-xs font-mono text-[#7E6C86]">${deal.progress}%</div>
                                    </div>
                                    <div class="h-2 w-full bg-[#E5E5E5] rounded-full overflow-hidden relative">
                                        <div class="absolute top-0 left-0 h-full bg-[#7E6C86] rounded-full" style="width: ${deal.progress}%"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="bg-gray-50 px-8 py-4 flex justify-end gap-3 border-t border-[#E5E5E5]">
                        <button onclick="closeModal()" class="px-6 py-2 rounded text-sm font-medium text-gray-600 hover:text-[#1C1C1C] hover:bg-gray-100 transition-colors">Close</button>
                        <button class="px-6 py-2 rounded text-sm font-medium bg-[#1C1C1C] text-white hover:bg-black transition-colors shadow-lg">Update Status</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    modalContainer.innerHTML = modalHtml;
    lucide.createIcons();
}

function closeModal() {
    modalContainer.innerHTML = '';
}

// --- Bulk Action Logic ---

function updateBulkActions() {
    const checkboxes = document.querySelectorAll('.row-checkbox');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const bulkActionBar = document.getElementById('bulk-actions');
    const countDisplay = document.getElementById('selected-count');

    if (countDisplay) countDisplay.textContent = checkedCount;

    if (bulkActionBar) {
        if (checkedCount > 0) {
            bulkActionBar.classList.remove('-translate-y-full');
        } else {
            bulkActionBar.classList.add('-translate-y-full');
        }
    }
}

function toggleAll(source) {
    const checkboxes = document.querySelectorAll('.row-checkbox');
    checkboxes.forEach(cb => {
        cb.checked = source.checked;
    });
    updateBulkActions();
}

function deselectAll() {
    const checkboxes = document.querySelectorAll('.row-checkbox');
    const headerCheckbox = document.querySelector('thead input[type="checkbox"]');

    checkboxes.forEach(cb => cb.checked = false);
    if (headerCheckbox) headerCheckbox.checked = false;

    updateBulkActions();
}

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Attach Event Listeners

    // Find the "Immediate Actions" card in index.html and make it clickable
    // We look for the card containing "Immediate Actions" text
    const actionCard = Array.from(document.querySelectorAll('.editorial-card')).find(el => el.textContent.includes('Immediate Actions'));
    if (actionCard) {
        actionCard.style.cursor = 'pointer';
        actionCard.onclick = openActionModal;
    }

    // Find the "Negotiation Velocity" card
    const negCard = Array.from(document.querySelectorAll('.editorial-card')).find(el => el.textContent.includes('Negotiation Velocity'));
    if (negCard) {
        negCard.style.cursor = 'pointer';
        negCard.onclick = openNegotiationsModal;
    }

    lucide.createIcons();
});
