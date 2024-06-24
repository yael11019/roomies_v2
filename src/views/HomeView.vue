<template>
  <HeaderComponent />
  <div class="home">
    <aside>
      <InputSearch v-model="search" />
      <ProfileCard
        :avatar="profileStore.avatar"
        :username="profileStore.username"
        :status="profileStore.status"
      />
      <RouterLink to="/" class="channels-title">Canales <Icon icon="carbon:hashtag" /></RouterLink>
      <div class="channels">
        <ChatItem
          v-for="channel in channelStore.getChannels(search)"
          :key="channel.id"
          :id="channel.id"
          :name="channel.name"
          :messages="channel.messages"
        />
      </div>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
  </template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import InputSearch from '@/components/InputSearch.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import ChatItem from '@/components/ChatItem.vue'
import { ref, reactive } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import useProfileStore from '@/store/profile.js'
import useChannelsStore from '@/store/channels.js'

const profileStore = useProfileStore();

const search = ref('')

const channelStore = useChannelsStore();


</script>

<style lang="scss" scoped>
.home {
  @apply flex h-screen;
  aside {
    @apply flex flex-col w-80 min-w-max px-6 py-5 gap-4 bg-zinc-800;
    .channels-title {
      @apply flex items-center gap-2 mt-2 ml-3 text-xl font-bold text-neutral-200;
    }
    .channels {
      @apply flex flex-col gap-2 overflow-y-auto;
    }
  }
  main {
    @apply w-full;
  }
}
</style>